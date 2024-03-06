class UIElement {
  constructor() {
    this.element = document.createElement("div");
  }

  setPosition(position) {
    this.element.style.position = position;
  }

  getPosition() {
    return this.element.style.position;
  }

  setTop(top) {
    this.element.style.top = top;
  }

  getTop() {
    return this.element.style.top;
  }

  setLeft(left) {
    this.element.style.left = left;
  }

  getLeft() {
    return this.element.style.left;
  }

  setZIndex(zIndex) {
    this.element.style.zIndex = zIndex;
  }

  getZIndex() {
    return this.element.style.zIndex;
  }

  setClassName(className) {
    this.element.className = className;
  }

  getClassName() {
    return this.element.className;
  }

  setTextContent(textContent) {
    this.element.textContent = textContent;
  }

  getTextContent() {
    return this.element.textContent;
  }

  setWidth(width) {
    this.element.style.width = width + "px";
  }

  getWidth() {
    return this.element.style.width;
  }

  setHeight(height) {
    this.element.style.height = height + "px";
  }

  getHeight() {
    return this.element.style.height;
  }

  setLineHeight(lineHeight) {
    this.element.style.lineHeight = lineHeight;
  }

  getLineHeight() {
    return this.element.style.lineHeight;
  }

  setTextAlign(textAlign) {
    this.element.style.textAlign = textAlign;
  }

  getTextAlign() {
    return this.element.style.textAlign;
  }

  setBackground(background) {
    this.element.style.background = background;
  }

  getBackground() {
    return this.element.style.background;
  }

  setMarginBottom(marginBottom) {
    this.element.style.marginBottom = marginBottom;
  }

  getMarginBottom() {
    return this.element.style.marginBottom;
  }

  setCursor(cursor) {
    this.element.style.cursor = cursor;
  }

  getCursor() {
    return this.element.style.cursor;
  }

  appendChild(childElement) {
    this.element.appendChild(childElement);
  }

  getElement() {
    return this.element;
  }
}
