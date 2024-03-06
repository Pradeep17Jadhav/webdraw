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
