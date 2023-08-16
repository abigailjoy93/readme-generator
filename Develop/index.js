// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    question: "What is the title of your project?",
    type: "text",
  },
  {
    question: "Please describe your project.",
    type: "text",
  },
  {
    question: "Please outline the installation instructions.",
    type: "text",
  },
  {
    question: "What is the intended use of this application?",
    type: "text",
  },
  {
    question: "Are there any contributions you would like to name?",
    type: "text",
  },
  {
    question: "Please outline the testing instructions.",
    type: "text",
  },
  {
    question: "Which license is your application covered under?",
    options: [
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
    question: "What is your GitHub username?",
    type: "url",
  },
  {
    question: "What is your email address?",
    type: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
