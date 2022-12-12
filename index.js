// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please Enter Project Title"
    },
    {
        type: "list",
        name: "license",
        message: "Please Select your Project License",
        choices: ["mit", "apache 2.0", "gpl", "none"]
    },
    {
        type: "input",
        name: "description",
        message: "Please Enter Project Description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please Enter Project Installation Instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please Enter Project Usage Information"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please Enter Project Contribution Guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Please Enter Project Testing Guidelines"
    }, {
        type: "input",
        name: "contact",
        message: "Please Enter your Git Hub Username"
    },
];


// writes README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, "/Examples/", fileName), data)
}

//initializes app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
