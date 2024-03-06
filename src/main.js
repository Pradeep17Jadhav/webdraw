const toolbar = new Toolbar();
document.body.appendChild(toolbar.getElement());

const coordinates = new Coordinates();
const strokeHandler = new StrokeHandler(coordinates);
const mainCanvas = new MainCanvas();
strokeHandler.setMainCanvas(mainCanvas);

window.onresize = function (event) {
  mainCanvas.repositionMainCanvas();
};

const checkResize = setInterval(() => {
  let updated = false;
  if (document.body.scrollWidth !== mainCanvas.getWidth()) {
    mainCanvas.repositionMainCanvasWidth();
    updated = true;
  }

  if (document.body.scrollHeight !== mainCanvas.getHeight()) {
    mainCanvas.repositionMainCanvasHeight();
    updated = true;
  }

  if (updated) {
    strokeHandler.repaintCanvas();
  }
}, 2000);
