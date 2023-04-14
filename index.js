const inquirer = ("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const { writeFile } = require("fs/promises");
const SVG = require("./lib/SVG");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo:",
        validate: function (value) {
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
inquirer.prompt(questions).then(({ text, shapeType, textColor, shapeColor }) => {
    let shape;
    switch (shapeType) {
        case "Circle":
            shape = new Circle(100);
            break;
        case "Square":
            shape = new Square(100);
            break;
        case "Triangle":
            shape = new Triangle(100);
            break;
    }
    shape.setColor(shapeColor);
    const svg = new SVG()
    svg.setText(text, textColor)
    svg.setShape(shape)
    return writeFile("./output/output.svg", svg.render())
}).then(() => {
    console.log("Your SVG file has been saved!");
}).catch(err => {
    console.log(err);
});

