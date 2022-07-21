// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title: ',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please enter your project title!')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description: ',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please enter a description of your project!')
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install instructions: ',
        validate: projectInstall => {
            if (projectInstall) {
                return true;
            } else {
                console.log('Please directions for installation!')
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use application: ',
        validate: projectUsage => {
            if (projectUsage) {
                return true;
            } else {
                console.log('Please enter a directions for usage!')
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute: ',
        validate: projectContirbution => {
            if (projectContirbution) {
                return true;
            } else {
                console.log('Please enter a directions for contribution!')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github repo link: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are directions for testing this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the type of license',
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "No License"]
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //path.join gets current working directory and adds "dist".. making a path
    return fs.writeFileSync(path.join(process.cwd(), "/dist", fileName), data)
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    writeToFile("GeneratedREADME.md", generateMarkdown(answers))
    console.log("README created!")
}

// Function call to initialize app
init();
