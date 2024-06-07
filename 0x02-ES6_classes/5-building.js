export default class Building {
  constructor(sqf) {
    this.sqf = sqf;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqf() {
    return this._sqft;
  }

  set sqf(value) {
    this._sqft = value;
  }
}
