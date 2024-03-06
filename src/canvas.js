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
