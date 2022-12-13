
const inquirer = require('inquirer');
const fs = require('fs');
const { table } = require('console');


 const generateReadme = ({title, description, installation, usage, license, contributing, tests, questions, github, email}) =>

`# ${title}


## ${description}


## ${installation}


## ${usage}


## ${license}


## ${contributing}


## ${tests}


## ${questions}



## ${github}


## ${email}`


 inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project.'
        },
        {
        type: 'input',
        name: 'installation',
        message: 'Please enter how the user installs this application?'
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
        message: 'How should people contribute to this project?'
        },
        {
        type: 'input',
        name: 'tests',
        message: 'How should the user test this application?'    
        },
        {
        type: 'input',
        name: 'questions',
        message: 'Please enter any questions here.'    
        },
        {
        type: 'input',
        name: 'github',
        message: 'Would you like to enter your Github username?'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email to be contacted if any questions arise.'  
        },
])

.then((answers) => {
    const readMeContent = generateReadme(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Readme was created!')
    )
})




