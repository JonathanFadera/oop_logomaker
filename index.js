const inquirer =("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const { writeFile } = require("fs/promises");
const SVG = require("./lib/SVG");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
        validate: function(value) {
            if (value.length > 3) {
                return "Please enter up to three characters.";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["Circle", "Square", "Triangle"]
    },
    
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for the text (keyword or hexadecimal number):",

    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape (keyword or hexadecimal number):",
    },

];

inquirer.prompt(questions).then(({text,shapeType,textColor,shapeColor}) => {
    const shape = shapeType === "Circle"? new Circle(text) : shapeType === "Square"? new Square(text) : new Triangle(text);
    const svg = new SVG(shape, textColor, shapeColor);
    writeFile("output.svg", svg.getSVG());
}
);
