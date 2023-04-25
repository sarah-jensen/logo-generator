// Jest tests for shapes
// test for 'render()' method that returns a string for the corresponding SVG file with given shape color

const { Circle, Square, Triangle } = require("./shapes.js");

// test methods for Shapes class

describe("Shapes class setText method", () => {
  describe("The text desiplayed on the logo should match user input", () => {
    it("should have the same characters and color as entered by user", () => {
        const circle = new Circle();
        circle.setText("white", "NW");
        expect(circle.textColor).toEqual("white");
        expect(circle.text).toEqual("NW");
      });
    });
  });
  
  describe("Shapes class renderLogoText method", () => {
    describe("The text desiplayed on the logo should match user input", () => {
      it("the fill color and text should be entered into the rendered SVG file correctly as all caps", () => {
        const square = new Square();
        square.setText("yellow", "etp");
        square.renderLogoText("yellow", " etp")
        expect(`<text x="150" y="100" fill="yellow" text-anchor="middle">ETP</text>`);
      });
    });
  });
  
  describe("Shapes class setFill method", () => {
      describe("The fill color of the logo shape should match user input", () => {
        it("the logo shape should have the same color as entered by user", () => {
            const triangle = new Triangle();
            triangle.setFill("yellow");
            expect(triangle.fill).toEqual("yellow");
          });
      });
    });

    // tests for renderUserShape method for Circle
  describe("The logo rendered should be the shape and color entered by the user.", () => {
    it("should be the shape selected by the user and the color entered by the user", () => {
      const circle = new Circle();
      circle.setFill("navy");
      circle.renderUserShape();
      expect(`<circle cx="150" cy="100" r="50" fill="navy"/>`);
    });
  });

   // tests for renderUserShape method for Square
  describe("The logo rendered should be the shape and color entered by the user.", () => {
    it("should be the shape selected by the user and the color entered by the user", () => {
      const circle = new Square();
      circle.setFill("green");
      circle.renderUserShape();
      expect(`<rect x="100" y="50" width="100" height="100" fill="green"/>`);
    });
  });
  
 // tests for renderUserShape method for Triangle
  describe("The logo rendered should be the shape and color entered by the user.", () => {
    it("should be the shape selected by the user and the color entered by the user", () => {
      const circle = new Triangle();
      circle.setFill("teal");
      circle.renderUserShape();
      expect(`<polygon points="70, 120 170, 25 220, 155" fill="teal"/>`);
    });
  });

