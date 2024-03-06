class Toolbar extends UIElement {
  constructor() {
    super();
    this.createButtons();
    this.setClassName("toolbar");
  }

  createButtons() {
    const buttonValues = ["1", "2", "3", "4", "5", "6"];
    buttonValues.forEach((value) => {
      const button = new UIElement();
      button.setClassName("toolbarButton");
      button.setTextContent(value);
      this.appendChild(button.getElement());
    });
  }
}
