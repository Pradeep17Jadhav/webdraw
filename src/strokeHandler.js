class StrokeHandler {
  constructor() {
    this.mainCanvas = null;
    this.coordinates = coordinates;
    this.currentStroke = {
      start: null,
      path: [],
      end: null,
    };
    this.strokes = [];
    this.thickness = 5;
    this.color = new Color(255, 0, 0);
    this.opacity = 1;
  }

  handlePointerDown(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    this.currentStroke = {
      start: this.coordinates.getOffsetCoordinates(event),
      path: [],
      end: null,
    };
    this.drawStroke(this.currentStroke);
  }

  handlePointerMove(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    if (this.currentStroke && this.currentStroke.start) {
      if (!this.currentStroke.path) {
        this.currentStroke.path = [];
      }
      this.currentStroke.path.push(
        this.coordinates.getOffsetCoordinates(event)
      );
      this.drawStroke(this.currentStroke);
    }
  }

  handlePointerUp(event, canvasEnabled) {
    if (!canvasEnabled) {
      return;
    }
    if (this.currentStroke) {
      this.currentStroke.end = this.coordinates.getOffsetCoordinates(event);
      this.drawStroke(this.currentStroke);
      this.strokes.push(this.currentStroke);
      this.currentStroke = null;
    }
  }

  drawStroke(stroke) {
    if (!this.mainCanvasContext) {
      console.error("Can't draw stroke, canvas context not found");
      return;
    }
    this.mainCanvasContext.strokeStyle = `rgb(${this.color.getR()},${this.color.getG()},${this.color.getB()})`;
    this.mainCanvasContext.lineWidth = this.thickness;
    this.mainCanvasContext.beginPath();
    this.mainCanvasContext.moveTo(stroke.start.x, stroke.start.y);
    stroke.path.forEach((point) => {
      this.mainCanvasContext.lineTo(point.x, point.y);
    });
    this.mainCanvasContext.stroke();
    if (stroke.end) {
      this.mainCanvasContext.lineTo(stroke.end.x, stroke.end.y);
      this.mainCanvasContext.stroke();
    }
  }

  repaintCanvas() {
    this.clearCanvas();
    this.strokes.forEach((stroke) => {
      this.drawStroke(stroke);
    });
  }

  clearCanvas() {
    this.mainCanvasContext.clearRect(
      0,
      0,
      this.mainCanvas.getWidth(),
      this.mainCanvas.getHeight()
    );
  }

  setMainCanvas = (mainCanvas) => {
    this.mainCanvas = mainCanvas;
    this.mainCanvasContext = mainCanvas.getContext();
  };
}
