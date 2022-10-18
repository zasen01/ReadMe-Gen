// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please Enter Project Title"
    },
    {
        type:"list",
        name:"license",
        message:"Please Select your Project License",
        choices:["mit","apache 2.0", "gpl"]
    },
    {
        type:"input",
        name:"description",
        message:"Please Enter Project Description"

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname,"/Examples/",fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
