// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please outline the installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the intended use of this application?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Are there any contributions you would like to name?",
  },
  {
    type: "input",
    name: "testingInstructions",
    message: "Please outline the testing instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license is your application covered under?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0,",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Publi License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "gitHubUserName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
];

console.log(process.argv);

// // TODO: Create a function to write README file
function writeToFile(filename, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
