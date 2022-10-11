---
id: changelog
title: Changelog
---

## [0.8.0](https://github.com/buidler-labs/hedera-strato-js/milestone/4)

- Supports `@hashgraph/sdk@2.17.1`
- Added `LiveContract` [support for deep-nested object params](https://github.com/buidler-labs/hedera-strato-js/blob/676b1cfa543714d3f9693ae78eedc4174d975cd9/test/general/specs/LiveContract.spec.ts#L201) ([#73](https://github.com/buidler-labs/hedera-strato-js/issues/73))
- Added [library-linking support](https://github.com/buidler-labs/hedera-strato-js/blob/676b1cfa543714d3f9693ae78eedc4174d975cd9/test/issues/specs/38-library-linking.spec.ts) ([#38](https://github.com/buidler-labs/hedera-strato-js/issues/38))
- File size chunks have been increased from `1024` to `4096`
- Automating mapping various Hedera Entity Ids (eg. `TokenId`, `AccountId`, `FileId`, etc.) to solidity addresses ([#64](https://github.com/buidler-labs/hedera-strato-js/issues/64))
- `@buidlerlabs/rollup-plugin-hedera-strato` has also been bumped and adjusted to support this release
- 💥 Bumped `HEDERAS_DEFAULT_PAYMENT_FOR_CONTRACT_QUERY` from `1000000` to `20000000` to adjust for network price updates

## 0.7.5

- Lighten the repo by splitting it into 3: [the core one](https://github.com/buidler-labs/hedera-strato-js), [the docs, aka "this one"](https://github.com/buidler-labs/hedera-strato-docs) and [the rollup plugin](https://github.com/buidler-labs/hedera-strato-rollup)
- Deleting `LiveEntity`s now invalidates them so that, for consistency, certain operations won't work on them anymore
- 💥 _Potentially braking change!_ Returning `bytes` from Solidity now maps to managed (eg. `Uint8Array`) data structures
- [`package.json` exports](https://github.com/buidler-labs/hedera-strato-js/blob/e1aa9c23999df59bf7f41345c61a2e3ecd93e1cb/package.json#L7) are now aligned with `@hashgraph/sdk`'s
- cracked the infamous ['wall-of-text' bug](https://github.com/buidler-labs/hedera-strato-js/issues/81)

## 0.7.4

- Supports `@hashgraph/sdk@2.11.3`
- Support for [HIP-338 wallets](https://hips.hedera.com/hip/hip-338). See [the wallets guides section](./guides/wallet.md) for more info.
- Added the [bundling guide](./guides//bundling.md) that makes use of a custom defined `@buidlerlabs/hedera-strato-js/rollup-plugin` export
- Added `LiveEntity.deleteEntity` and `LiveEntity.updateEntity` operations to `delete` and/or `update` self-entity
- Added [`Topic`/`LiveTopic`](./guides/entities/topic.md) and [`File`/`LiveFile`](./guides/entities/file.md) pairs
- Implemented [`LiveAddress.equals(AccountId)` functionality](https://github.com/buidler-labs/hedera-strato-js/issues/34)
- Implemented [`StratoAddress.toLiveAccount()`](https://github.com/buidler-labs/hedera-strato-js/issues/49)
- [Auto arrayfying hex string](https://github.com/buidler-labs/hedera-strato-js/issues/40) if `bytes32` arguments are expected by the `LiveContract` call
- 💥 _Potentially braking change!_ Added [`HEDERAS_DEFAULT_CONTRACT_REQUESTS_RETURN_ONLY_RECEIPTS` config](./configuration.md) option to have [finer cost-control over contract-requests](https://github.com/buidler-labs/hedera-strato-js/issues/48). Set it to `false` to revert to v0.7.3 behavior. This only affects state-mutating contract-calls. Non-mutating (query) calls are not affected by this parameter.
- Fixed [recursive loading of ABIs into `ContractRegistry`s](https://github.com/buidler-labs/hedera-strato-js/issues/50) at bundling time
- Allow [`ContractRegistry`s to be created from abstract](https://github.com/buidler-labs/hedera-strato-js/issues/54) solidity contracts
- A lot of tweaks on docs, visual and others
- Added [github actions workflows](https://github.com/buidler-labs/hedera-strato-js/actions) for manual/auto testing

## 0.7.3

- Supports `@hashgraph/sdk@2.7.0`
- Added support for creating `Token`s
- Added support for creating `Account`s
- Added more config options with sensible defaults to control behavior and expenses
- Allowed constructors to generate logs
- Started adding a `Controller` mechanism for sessions in preparation to support integration with wallets

## 0.6.10

Initial release
