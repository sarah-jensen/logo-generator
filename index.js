const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const shapes = require("./lib/shapes");
const shapesTest = require("./lib/shapes.test");

function promptInit() {
  inquirer.prompt([
    {
      name: "text",
      message: "Enter up to three characters that you wish to display in your logo",
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
      choices: ["triangle", "circle", "square"],
    },
    {
      name: "shapeColor",
      message: "Enter a color (or hexadecimal number) for your shape.",
      type: "input",
    },
  ]);
}

// write SVG file 'logo.svg' + console.log('Generated logo.svg')


// Function call to initialize app
promptInit();