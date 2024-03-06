 
class MainCanvas {
  constructor() {
    this.mainCanvas = null;
    this.context = null;
    this.canvasEnabled = false;
    this.createMainCanvas();
    this.enableDisableCanvas(false);
  }

  createMainCanvas = () => {
    this.mainCanvas = new UIElement("canvas");
    this.repositionMainCanvas();
    this.context = this.mainCanvas.getElement().getContext("2d");
    this.mainCanvas.setClassName("mainDrawingCanvas");
    this.mainCanvas.addEventListener("pointerdown", (event) => {
      strokeHandler.handlePointerDown(event, this.canvasEnabled);
    });
    this.mainCanvas.addEventListener("pointermove", (event) => {
      strokeHandler.handlePointerMove(event, this.canvasEnabled);
    });
    this.mainCanvas.addEventListener("pointerup", (event) => {
      strokeHandler.handlePointerUp(event, this.canvasEnabled);
    });
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
    this.mainCanvas.setWidth(window.innerWidth);
    this.mainCanvas.setHeight(window.innerHeight);
  };

  getContext = () => {
    return this.context;
  };
}
 
class StrokeHandler {
  constructor() {
    this.mainCanvas = null;
    this.currentStroke = {
      start: null,
      path: [],
      end: null,
    };
    this.strokes = [];
    this.thickness = 5;
    this.color = new Color(255, 0, 0);
    this.opacity = 1;
  }

  handlePointerDown(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    this.currentStroke = {
      start: { x: event.clientX, y: event.clientY },
      path: [],
      end: null,
    };
    this.drawStroke(this.currentStroke);
  }

  handlePointerMove(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    if (this.currentStroke && this.currentStroke.start) {
      if (!this.currentStroke.path) {
        this.currentStroke.path = [];
      }
      this.currentStroke.path.push({ x: event.clientX, y: event.clientY });
      this.drawStroke(this.currentStroke);
    }
  }

  handlePointerUp(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    if (this.currentStroke) {
      this.currentStroke.end = { x: event.clientX, y: event.clientY };
      this.clearCanvas();
      this.drawStroke(this.currentStroke);
      this.strokes.push(this.currentStroke);
      this.currentStroke = null;
    }
  }

  drawStroke(stroke) {
    if (!this.mainCanvasContext) {
      console.error("Can't draw stroke, canvas context not found");
      return;
    }
    this.mainCanvasContext.strokeStyle = `rgb(${this.color.getR()},${this.color.getG()},${this.color.getB()})`;
    this.mainCanvasContext.lineWidth = this.thickness;
    this.mainCanvasContext.beginPath();
    this.mainCanvasContext.moveTo(stroke.start.x, stroke.start.y);
    stroke.path.forEach((point) => {
      this.mainCanvasContext.lineTo(point.x, point.y);
    });
    this.mainCanvasContext.stroke();
    if (stroke.end) {
      this.mainCanvasContext.lineTo(stroke.end.x, stroke.end.y);
      this.mainCanvasContext.stroke();
    }
  }

  drawPoint() {
    
  }

  clearCanvas() {
    this.mainCanvasContext.clearRect(
      0,
      0,
      this.mainCanvas.width,
      this.mainCanvas.height
    );
  }

  setMainCanvas = (mainCanvas) => {
    this.mainCanvas = mainCanvas;
    this.mainCanvasContext = mainCanvas.getContext();
  };
}
 
brushData = []; 
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
    this.element.width = width;
  }

  getWidth() {
    return this.element.style.width;
  }

  setHeight(height) {
    this.element.style.height = height + "px";
    this.element.height = height;
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
        svg: `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M344.35 142.219L379.705 106.863L323.137 50.2949L287.781 85.6503" stroke="#08A88A" stroke-width="12" stroke-miterlimit="14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M153.431 333.137L68.6216 361.465L96.8623 276.568" stroke="#121331" stroke-width="12" stroke-miterlimit="14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M153.431 333.138L96.8624 276.569L287.781 85.6504L344.35 142.219L153.431 333.138Z" stroke="#121331" stroke-width="12" stroke-miterlimit="14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M220.606 209.394L287.781 142.219" stroke="#08A88A" stroke-width="12" stroke-miterlimit="14" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      },
      {
        label: "brush",
        svg: `<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" width="100%" height="100%">
        <style type="text/css">
            .st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
            .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st3{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}
            .st4{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:3;}
        </style>
        <line class="st2" x1="22.3" y1="22" x2="11" y2="10.7"/>
        <path class="st2" d="M11.6,17.1l-6.2,5.3c-1.6,1.4-2,3.8-0.7,5.4c1.5,1.8,4.2,1.7,5.7-0.1l5.4-6.3l2.8,2.8c0.4,0.4,1,0.4,1.4,0
            l9.5-9.5l-7.1-7.1l-3.5,0.7l0.7-3.5l-1.4-1.4l-9.5,9.5c-0.4,0.4-0.4,1,0,1.4L11.6,17.1"/>
        <line class="st2" x1="13.8" y1="19.2" x2="11.6" y2="17.1"/>
    </svg>`,
      },
    ];
  }
  generateIcon(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");

    // Extract the root SVG element
    const svgElement = doc.documentElement;

    // Set necessary attributes
    svgElement.setAttribute("class", "icon");
    svgElement.setAttribute("viewBox", "0 0 24 24");

    return svgElement;
  }
  createButtons() {
    const buttonValues = this.getButtons();
    buttonValues.forEach((btnInfo) => {
      const button = new UIElement();
      button.setClassName("toolbarButton");
      const icon = this.generateIcon(btnInfo.svg);
      button.appendChild(icon);
      button.addEventListener("pointerup", (event) => {
        event.stopPropagation();
        mainCanvas.toggleEnableDisableCanvas();
      });
      button.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      this.appendChild(button.getElement());
    });
  }
}
 
class Brush {
  constructor() {
    this.size = 5;
    this.color = new Color(255, 0, 0);
    this.opacity = 1;
  }
}
 
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
 
 
const toolbar = new Toolbar();
document.body.appendChild(toolbar.getElement());

const strokeHandler = new StrokeHandler();
const mainCanvas = new MainCanvas();
strokeHandler.setMainCanvas(mainCanvas);

window.onresize = function (event) {
  mainCanvas.repositionMainCanvas();
};
