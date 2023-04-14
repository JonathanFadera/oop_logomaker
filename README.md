# OOP_Logo_Maker

![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

SVG_Logo_Maker

## Description 
Build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/SVG).The application prompts the user to select a color and shape, provide text for the  logo, and save the generated SVG to a `.svg` file.

## Table of Contents 

  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)

## Installation
Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository. 
The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest.
While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes. 
Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

## Usage
As a freelance web developer, I want to generate a simple logo for my projects so that I dont have to pay a graphic designer.

## License
    This application is covered by the MIT license.

## Tests
Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the command: `node index.js`.

## Credits
[Jonathan Fadera](https://github.com/JonathanFadera), [Week_10-oop](https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-PT-01-2023-U-LOLC/-/tree/main/Week_10-OOP/01-Activities)

## Questions
If there are any questions, feel free to contact my email at: ericsonhnc@gmail.com

You can also find me on GitHub at: [JonathanFadera](https://www.github.com/JonathanFadera)

## Deployed Application
This application was deployed at [https://github.com/JonathanFadera/oop_logomaker](https://github.com/JonathanFadera/oop_logomaker)
