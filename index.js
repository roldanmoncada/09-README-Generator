// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // npm package require
const fs = require('fs'); // File system
const path = require('path');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', // Creating the questions in the order that they came in on the README for this challenge.
        name: 'title',
        message: 'What is the title for your project?',
    },
    {
        type: 'input', // Description came second.
        name: 'description',
        message: 'Please enter a brief description of your project:' // Keeping this phrasing the same for all bulk text options in the project.
    },
    {
        type: 'input', // This came third.
        name: 'install',
        message: 'Please enter installation instructions:'
    },
    {
        type: 'input', // This came fourth.
        name: 'usage',
        message: 'Please enter usage information:'
    },
    {
        type: 'list', // This came fifth and is the only one that is different in type. Since the instructions asked for 
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input', // This came sixth.
        name: 'contrib', // Abbreviated for brevity in my string template literal on the generateMarkdown.js
        message: 'Please enter contribution guidelines:'
    },
    {
        type: 'input', // This came seventh.
        name: 'tests', 
        message: 'Please enter testing instructions:'
    },
    {
        type: 'input', // This came eighth.
        name: 'qs-', 
        message: 'Please enter testing instructions:'
    },
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
