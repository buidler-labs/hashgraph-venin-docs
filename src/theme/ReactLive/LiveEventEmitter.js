class LiveEventEmitter {
  constructor() {
    this._events = {};
  }

  on(name, listener) {
    if (!this._events[name]) {
      this._events[name] = [];
    }
    this._events[name].push(listener);
  }

  removeListener(name) {
    this._events[name] = null;
  }

  emit(name, data) {
    if (!this._events[name]) {
      // No one is listening, don't do anything
      return;
    }

    this._events[name].forEach((clb) => clb(data));
  }
}

export default LiveEventEmitter;
