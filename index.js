const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const { Circle, Square, Triangle } = require("./lib/shapes.js");
const shapesTest = require("./lib/shapes.test.js");

function promptInit() {
  inquirer
    .prompt([
      {
        name: "text",
        message:
          "Enter up to three characters that you wish to display in your logo",
        type: "input",
      },
      {
        name: "textColor",
        message: "Enter a color (or hexadecimal number) for your text.",
        type: "input",
      },
      {
        name: "shape",
        message: "Select a shape for your logo",
        type: "list",
        choices: ["circle", "square", "triangle"],
      },
      {
        name: "fill",
        message: "Enter a color (or hexadecimal number) for your shape.",
        type: "input",
      },
    ])
    .then((logoData) => {
      let userShape;

      switch (logoData.shape) {
        case "circle":
          userShape = new Circle();
          break;
        case "square":
          userShape = new Square();
          break;
        case "triangle":
          userShape = new Triangle();
          break;
        default:
          console.log("Oops! Your input was not recorded.");
      }

      userShape.setFill(logoData.fill);

      userShape.renderLogoText(logoData.text); //need to pass text and textColor

      console.log(userShape);
    });
}

// write SVG file 'logo.svg' + console.log('Generated logo.svg')
// image is 300x200 pixels

// Function call to initialize app
promptInit();

console.log("Generated 0logo.svg)");
