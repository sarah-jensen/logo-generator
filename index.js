// Required packagaes
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Prompts to collect user input
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

    // Function to generate logo object based on user input
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

      `${userShape.setFill(logoData.fill)}`;
      `${userShape.setText(logoData.textColor, logoData.text)}`;

      console.log(userShape);

      // Function call to compile SVG data
      renderSVG(userShape);
    });
}
// Function to complie SVG data
function renderSVG(userShape) {
  const svgFileContent = `
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg
            version="1.1"
            width="300"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:ev="http://www.w3.org/2001/xml-events">
            <rect width="100%" height="100%" fill="transparent" />
            
            ${userShape.renderUserShape()}

            ${userShape.renderLogoText()}
            
            </svg>`;

  // Function call to create mySvgFile
  writeToFile("logo.svg", svgFileContent);
}
// Function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Oops! Your file was not created.");
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// Function call to initialize app
promptInit();
