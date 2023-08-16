const inquirer = require("inquirer");
inquirer
  .Prompt([
    // Pass your questions in here
  ])
  .then((answers) => {
    // User feedback
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
