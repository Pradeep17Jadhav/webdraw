class Color {
  constructor(r, g, b) {
    this._r = r;
    this._g = g;
    this._b = b;
  }

  getR() {
    return this._r;
  }

  getG() {
    return this._g;
  }

  getB() {
    return this._b;
  }

  setR(value) {
    this._r = this.validateComponent(value);
  }

  setG(value) {
    this._g = this.validateComponent(value);
  }

  setB(value) {
    this._b = this.validateComponent(value);
  }

  validateComponent(value) {
    if (value < 0 || value > 255 || isNaN(value)) {
      throw new Error("Color component must be a number between 0 and 255");
    }
    return Math.round(value);
  }
}
