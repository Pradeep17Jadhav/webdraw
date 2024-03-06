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
