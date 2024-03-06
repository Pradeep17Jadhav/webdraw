const main = () => {
  console.log("Popup loaded");
  const toolbar = new Toolbar();
  document.body.appendChild(toolbar.getElement());
};

console.log("1 Popup loaded");

main();
