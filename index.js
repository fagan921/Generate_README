// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import chalk from 'chalk'

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: colors.brightMagenta('What is the title of your project?'),
    },
    {
      type: 'input',
      name: 'description',
      message: colors.brightMagenta('Provide a description of your project:'),
    },
    {
      type: 'input',
      name: 'installation',
      message: colors.brightMagenta('How do you install your project?'),
    },
    {
      type: 'input',
      name: 'usage',
      message: colors.brightMagenta('How do you use your project?'),
    },
    {
      type: 'checkbox',
      message: colors.brightMagenta('Which languages were required?'),
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: colors.brightMagenta('How can others contribute to your project?'),
    },
    {
      type: 'input',
      name: 'tests',
      message: colors.brightMagenta('How do you run tests for your project?'),
    },
    {
      type: 'list',
      name: 'license',
      message: colors.brightMagenta('What license does your project have?'),
      choices: ['MIT', 'GPLv3', 'Apache_2.0', 'BSD_3--Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: colors.brightMagenta('Enter GitHub Username:'),
    },
    {
        type: 'input',
        name: 'email',
        message: colors.brightMagenta('Enter Email Address:'),
      },
  ];
  
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = `

# ⨳ ${answers.title}

!License

## Table of Contents
- Description
- Installation
- Usage
- Languages
- Contributing
- Tests
- License
- Questions
  
## ⨲ Description
  *${answers.description}*
  
## ⨲ Installation
  *${answers.installation}*
  
## ⨲ Usage
  *${answers.usage}*

## ⨲ Languages
  *${answers.stack}*

## ⨲ Contributing
  *${answers.contributing}*
  
## ⨲ Tests
  *${answers.tests}*
  
## ⨲ License
  *${answers.license}*

### ﹖ Questions

  **GitHub:** ${answers.guthub}

  **Email:** ${answers.email}


    `;
  
    fs.writeFileSync('README.md', readmeContent.trim());
    console.log('README.md has been created!');
  });

