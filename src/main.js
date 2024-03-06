const toolbar = new Toolbar();
document.body.appendChild(toolbar.getElement());

const strokeHandler = new StrokeHandler();
const mainCanvas = new MainCanvas();
strokeHandler.setMainCanvas(mainCanvas);

window.onresize = function (event) {
  mainCanvas.repositionMainCanvas();
};
