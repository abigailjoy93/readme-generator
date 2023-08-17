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
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU Lesser General Public License v3.0",
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

function licenseBadge(license) {
  const badge = {
    "Apache License 2.0":
      "(https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "GNU General Public License v3.0":
      "(https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "MIT License": "(https://img.shields.io/badge/License-MIT-yellow.svg)",
    "BSD 2-Clause 'Simplified' License":
      "(https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
    "BSD 3-Clause 'New' or 'Revised' License":
      "(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
    "Creative Commons Zero v1.0 Universal":
      "(https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)",
    "Eclipse Public License 2.0":
      "(https://img.shields.io/badge/License-EPL%201.0-red.svg)",
    "GNU Affero General Public License v3.0":
      "(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
    "GNU Lesser General Public License v3.0":
      "(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)",
    "Mozilla Public License 2.0":
      "(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    "The Unlicense":
      "(https://img.shields.io/badge/license-Unlicense-blue.svg)",
  };
  return badge[license] || "";
}

function licenseTermsAndConditions(license) {
  const termsAndConditions = {
    "Apache License 2.0": "https://opensource.org/license/apache-2-0/",
    "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "MIT License": "https://opensource.org/license/mit/",
    "BSD 2-Clause 'Simplified' License":
      "https://opensource.org/license/bsd-2-clause/",
    "BSD 3-Clause 'New' or 'Revised' License":
      "https://opensource.org/license/bsd-3-clause/",
    "Creative Commons Zero v1.0 Universal":
      "https://creativecommons.org/publicdomain/zero/1.0/",
    "Eclipse Public License 2.0": "https://opensource.org/license/epl-1-0/",
    "GNU Affero General Public License v3.0":
      "https://www.gnu.org/licenses/agpl-3.0",
    "GNU Lesser General Public License v3.0":
      "https://www.gnu.org/licenses/lgpl-3.0",
    "Mozilla Public License 2.0": "https://opensource.org/license/mpl-2-0/",
    "The Unlicense": "https://unlicense.org/",
  };
  return termsAndConditions[license] || "";
}

function generateData(answers) {
  const licenseBadgeURL = licenseBadge(answers.license);
  const licenseTCURL = licenseTermsAndConditions(answers.license);
  return `
  #${answers.title}
  ![License](${licenseBadgeURL})


  ##Description

  ${answers.description}
  

  ##Table of Contents

  - [Installation](#installation)

  - [Usage](#usage)

  - [Contributions](#contributions)

  - [License](#license)

  - [Tests](#tests)

  - [Questions](#questions)


  ##Installation

  ${answers.installation}

  
  ##Usage

  ${answers.usage}


  ##License

  This application is covered under ${answers.license}.
  For deatils, see ${licenseTCURL}.


  ##Contributions

  ${answers.contributions}

  
  ##Tests

  ${answers.testingInstructions}


  ##Questions

  GitHub: https://github.com/${answers.gitHubUserName}

  For any additional questions, feel free to contact me at: ${answers.emailAddress}
  `;
}

// TODO: Create a function to write README file
function writeToFile(filename, content) {
  fs.writeFile(filename, content, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeData = generateData(answers);
      writeToFile("README.md", readmeData);
    })
    .catch((error) => {
      console.error("Error occured", error);
    });
}

// Function call to initialize app
init();
