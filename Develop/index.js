// Calls upon the npm inqurier. assigns const
const inquirer = require('inquirer');
const fs = require('fs');



 const generateReadme = ({title, description, installation, usage, license, contributing, tests, questions, github, email}) =>

//Display the paramaters that will be called upon

`## Table of Contents: 
-[Descripition](#Description)
    -[Instalation](#Instalation)
    -[Usage](#Usage)
    -[License](#License)
    -[Contributions](#Contributions)
    -[Tests](#Tests)
    -[Questions](#Questions)
    -[GitHub](#GitHub)
    -[Email](#Email)
    
#  Title 
${title}

##  Description
${description}

## Instalation
${installation}

## Usage
${usage}

## License
${license}

## Contributions
${contributing}

## Tests
${tests}

## Questions
${questions}

## GitHub 
${github}

## Email
${email}`

//Using the inquirer, using the prompts showing the type, name, and the message that the user will see, the user will be allowed the enter to their needs.

 inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of the project',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Enter descrption.'
        },
        {
        type: 'input',
        name: 'installation',
        message: 'Please enter how the user installs this application'
        },
        {
        type: 'input',
        name: 'usage',
        message: 'What is this application used for?'
        },
        {
        type: 'list',
        name: 'license',
        choices: ['Apache 2.0', 'MIT','Eclipise Public 2.0','Mozilla Public 2.0','None'],
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contributions.'
        },
        {
        type: 'input',
        name: 'tests',
        message: 'Enter Tests'    
        },
        {
        type: 'input',
        name: 'questions',
        message: 'This will be the Questions.'    
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter Github name if nesscary.'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email to be contacted if any questions arise.'  
        },
])

//Using the .then function pulling the answers from the prompt

.then((answers) => {
    const readMeContent = generateReadme(answers);
//Using .fs in order to write and generate the readme file in develop
//If there is an error, will log the error message, if readme was created will display the message.
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Readme was created!')
    )
})




