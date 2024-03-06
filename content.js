 
class MainCanvas {
  constructor() {
    this.mainCanvas = null;
    this.canvasEnabled = false;
    this.createMainCanvas();
    this.enableDisableCanvas(false);
  }

  createMainCanvas = () => {
    this.mainCanvas = new UIElement("canvas");
    this.mainCanvas.setClassName("mainDrawingCanvas");
    this.repositionMainCanvas();
    document.body.appendChild(this.mainCanvas.getElement());
  };

  toggleEnableDisableCanvas = () => {
    this.enableDisableCanvas(!this.canvasEnabled);
  };

  enableDisableCanvas = (enable) => {
    if (enable) {
      this.mainCanvas.setPointerEvents("auto");
      this.canvasEnabled = true;
    } else {
      this.mainCanvas.setPointerEvents("none");
      this.canvasEnabled = false;
    }
  };

  repositionMainCanvas = () => {
    this.mainCanvas.setWidth(document.body.clientWidth);
    this.mainCanvas.setHeight(document.body.scrollHeight);
  };
}
 
class UIElement {
  constructor(htmlElement) {
    if (!htmlElement) {
      htmlElement = "div";
    }
    this.element = document.createElement(htmlElement);
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

  setInnerHTML(innerHTML) {
    this.element.innerHTML = innerHTML;
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

  getPointerEvents() {
    return this.element.style.pointerEvents;
  }

  setPointerEvents(pointerEvents) {
    this.element.style.pointerEvents = pointerEvents;
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

  addEventListener(event, cb, options) {
    this.element.addEventListener(event, cb, options);
  }

  removeEventListener(event, cb) {
    this.element.removeEventListener(event, cb);
  }
}
 
class Toolbar extends UIElement {
  constructor() {
    super();
    this.createButtons();
    this.setClassName("toolbar");
  }

  getButtons() {
    return [
      {
        label: "pencil",
        svgPath: "assets/icons/svg/pencil.svg",
      },
      {
        label: "brush",
        svgPath: "assets/icons/svg/brush.svg",
      },
    ];
  }

  generateIcon(svgPath) {
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("class", "icon");
    svgElement.setAttribute("viewBox", "0 0 24 24");

    // Create a 'use' element to reference the external SVG file
    const useElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    useElement.setAttribute("xlink:href", svgPath);

    // Append the 'use' element to the 'svg' element
    svgElement.appendChild(useElement);
    return svgElement;
  }

  createButtons() {
    const buttonValues = this.getButtons();
    buttonValues.forEach((btnInfo) => {
      const button = new UIElement();
      button.setClassName("toolbarButton");
      button.setInnerHTML(this.generateIcon(btnInfo.svgPath));
      button.addEventListener("pointerup", () =>
        mainCanvas.toggleEnableDisableCanvas()
      );
      this.appendChild(button.getElement());
    });
  }
}
 
 
const toolbar = new Toolbar();
document.body.appendChild(toolbar.getElement());

const mainCanvas = new MainCanvas();

window.onresize = function (event) {
  mainCanvas.repositionMainCanvas();
};
