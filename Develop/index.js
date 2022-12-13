
const inquirer = require('inquirer');
const fs = require('fs');



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

.then((answers) => {
    const readMeContent = generateReadme(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Readme was created!')
    )
})




