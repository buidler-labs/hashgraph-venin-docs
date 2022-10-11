async function verify() : Promise<Response> {
    //TODO: better not include react env vars here...
    if(!process.env.REACT_APP_API_URL){
        throw new Error('There is no api URL set in .env')
    }

    return fetch(process.env.REACT_APP_API_URL + '/auth/ping', {
        credentials: 'include'
    });
}

async function createChallenge() {
    const tChallenge = await fetch(process.env.REACT_APP_API_URL + '/auth/token/challenge');
    return await tChallenge.json();
}

async function createToken(payload) : Promise<Response> {
    return fetch(process.env.REACT_APP_API_URL + '/auth/token', {
        credentials: 'include',
        method: 'POST',
        mode: 'no-cors',
        redirect: 'follow',
        body: JSON.stringify(payload),
    });
}

export async function authenticate() : Promise<Response> {
    const signer  = this;
    const {accountToSign, hashconnect} = signer;

    try {
        const res : Response = await verify();

        if (!res?.ok) {
            const {message} = await res.json();
            throw new Error(message)
        }

        return res;
    } catch (e) {
        const jTChallenge = await createChallenge();
        const serverSignature = Buffer.from(jTChallenge.server.signature, 'hex');

        const authRes = await hashconnect.authenticate(
            hashconnect.hcData.topic,
            accountToSign,
            jTChallenge.server.accountId,
            serverSignature,
            jTChallenge.payload
        );

        if (!authRes?.success) {
            throw new Error(`Unable to authenticate. Reason: ${authRes.error}`)
        }

        const tokenCreateRequestBody = {
            payload: jTChallenge.payload,
            signatures: {
                server: jTChallenge.server.signature,
                wallet: {
                    accountId: accountToSign,
                    value: Buffer.from(authRes.userSignature).toString('hex')
                }
            }
        };

        return await createToken(tokenCreateRequestBody);
    }
}