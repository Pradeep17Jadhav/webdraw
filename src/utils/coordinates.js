class Coordinates {
  constructor() {
    this.lastScrollX = 0;
    this.lastScrollY = 0;
  }

  getScrollX = () => {
    this.lastScrollX = window.scrollX || window.pageXOffset;
    return this.lastScrollX;
  };

  getScrollY = () => {
    this.lastScrollY = window.scrollY || window.pageYOffset;
    return this.lastScrollY;
  };

  getOffsetX = (event) => {
    return event.clientX + this.getScrollX();
  };

  getOffsetY = (event) => {
    return event.clientY + this.getScrollY();
  };

  getOffsetCoordinates = (event) => {
    return {
      x: this.getOffsetX(event),
      y: this.getOffsetY(event),
    };
  };
}
