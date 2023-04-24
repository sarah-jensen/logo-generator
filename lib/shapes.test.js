// Jest tests for shapes
// test for 'render()' method that returns a string for the corresponding SVG file with given shape color

const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle class", () => {
  describe("The text desiplayed on the logo should match user input", () => {
    it("should have the same characters and color as entered by user", () => {
        const circle = new Circle();
        expect(circle.setLogoText("white", "ETP"))
          .toEqual(`<text x="150" y="100" fill="white" text-anchor="middle">ETP</text>`);
      });
  });
});

  describe("The background color of the circle should match user input and display correctly.", () => {
    it("should have a fill matching the color entered by the user", () => {
      const circle = new Circle();
      circle.setFill("blue");
      expect(circle.setFill()).toEqual(
        `<circle cx="150", cy="100", r="50", fill="blue"/>`
      );
    });
  });

describe("Square class", () => {
    describe("The text desiplayed on the logo should match user input", () => {
      it("should have the same characters and color as entered by user", () => {
          const square = new Square();
          expect(square.setLogoText("white", "ETP"))
            .toEqual(`<text x="150" y="100" fill="white" text-anchor="middle">ETP</text>`);
        });
    });
    describe("The background color of the square should match user input and display correctly.", () => {
      it("should have a fill matching the color entered by the user", () => {
        const square = new Square();
        square.setFill("blue");
        expect(square.setFill()).toEqual(
          `<rect x=100 y=50 width: 100 height: 100, fill="${this.fill}"/>`
        );
      });
    });
  });

describe("Triangle class", () => {
    describe("The text desiplayed on the logo should match user input", () => {
      it("should have the same characters and color as entered by user", () => {
          const triangle = new Triangle();
          expect(triangle.setLogoText("white", "ETP"))
            .toEqual(`<text x="150" y="100" fill="white" text-anchor="middle">ETP</text>`);
        });
    });
    describe("The background color of the triangle should match user input and display correctly.", () => {
      it("should have a fill matching the color entered by the user", () => {
        const triangle = new Triangle();
        triangle.setFill("blue");
        expect(triangle.setFill()).toEqual(
          `<polygon points="75, 100 225, 50 225, 150", fill="${this.fill}"/>`
        );
      });
    });
  });

