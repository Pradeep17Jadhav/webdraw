const toolbar = new Toolbar();
document.body.appendChild(toolbar.getElement());

const mainCanvas = new MainCanvas();

window.onresize = function (event) {
  mainCanvas.repositionMainCanvas();
};
