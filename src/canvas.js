const addCanvas = () => {
  const canvas = new UIElement("canvas");
  canvas.setClassName("mainDrawingCanvas");
  canvas.setWidth(document.body.clientWidth);
  canvas.setHeight(document.body.scrollHeight);
  document.body.appendChild(canvas.getElement());
};
