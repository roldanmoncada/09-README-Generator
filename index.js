// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // npm package require
const fs = require('fs'); // File system
const path = require('path');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'placeholder'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInputs) => {
        console.log('generatedREADME')
        writeToFile('README.md', generateMD({...userInputs}))
    })
}

// Function call to initialize app
init();
