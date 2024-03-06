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
