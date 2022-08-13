//connect package
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR= path.resolve(__dirname, "output");
const outputPath = path.join (OUTPUT_DIR, "index.html");


const Manager = require('./lib/manager');
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const engineercard = require('./src/engineercard');
const managercard = require('./src/managercard');
const interncard = require('./src/interncard');
const body = require('./src/body');
const employeeDB = []


const managerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your Managers Name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is your Managers ID?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your Managers Email address?'

    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your Managers office number?'

    },

]

const teamMenu = [
    {
        name: 'menu',
        type: 'list',
        message: 'Choose the following role or select Finish if team is completed:',
        choices: ["Engineer", "Intern", "Finish TEAM"]

    },
]
const engineerQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your Engineers Name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is your Engineers ID?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your Engineers Email address?'

    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your Engineers GitHub Username?'

    },

]

const internQuestions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your Interns Name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is your Interns ID?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your Interns Email address?'

    },
    {
        name: 'school',
        type: 'input',
        message: 'What is your Interns school name?'

    },

]
function menu (){
    inquirer.prompt(teamMenu)
    .then(data=>{
        if (data.menu ==="Engineer"){
            addEngineer()

        } 
      if (data.menu === "Intern"){
          addIntern()
      }  
      if (data.menu === "Finish TEAM"){
          buildTeam()
      }
    });
}
function buildTeam(){
    console.log (employeeDB);

    let cards = ""
    for ( i=0; i< employeeDB.length; i++){
        if (employeeDB[i].getRole()==="Manager"){
            cards = cards+managercard(employeeDB[i])

        }
        if (employeeDB[i].getRole()=== "Engineer"){
            cards= cards+engineercard(employeeDB[i])
        }
        if (employeeDB[i].getRole()=== "Intern"){
            cards= cards+interncard(employeeDB[i])
        }
    }
// generate the cards
    fs.writeFileSync("./output/index.html", body(cards))
  
 
}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then (data =>{
        const intern = new Intern (data.name, data.id, data.email, data.school)
        employeeDB.push (intern);
        menu()
    });
}

function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(data=>{
        const engineer = new Engineer (data.name, data.id, data.email, data.github)
        employeeDB.push(engineer);
        menu()
    });
}

function init() {
    inquirer.prompt(managerQuestions)
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            employeeDB.push(manager);
            menu()

        });
}
 init()

