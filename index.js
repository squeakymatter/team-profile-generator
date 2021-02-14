const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const team = []

function createManager() {
  inquirer
    .prompt([
      {
        //ask for team manager's name (input)
        name: 'name',
        type: 'input',
        message: "What is the Team Manager's name?",
      },
      {
        //ask for manager's id
        name: 'id',
        type: 'input',
        message: "What is the Team Manager's employee ID?",
      },
      {
        //ask for team manager's email
        name: 'email',
        type: 'input',
        message: "What is the Team Manager's email address?",
      },
      {
        //ask for team manager's office number
        name: 'officeNumber',
        type: 'input',
        message: "What is the team manager's office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      )
      team.push(manager)
      console.log(team)
      createTeamMember()
    })
}

function createTeamMember() {
  inquirer
    .prompt([
      //ask for team member type
      {
        name: 'teamMember',
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((response) => {
      if (response.teamMember === 'Engineer') {
        console.log('Engineer was selected')
        addEngineer()
      } else if (response.teamMember === 'Intern') {
        console.log('Intern was selected')
        addIntern()
      } else if (
        response.teamMember === "I don't want to add any more team members"
      ) {
        console.log('no more teammates to add')
        console.log(team)
        //createHTML();
      }
    })
}

function addEngineer() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: "What is this engineer's name?",
      },
      {
        name: 'id',
        type: 'input',
        message: "What is the engineer's employee ID?",
      },
      {
        name: 'email',
        type: 'input',
        message: "What is this engineer's email address?",
      },
      {
        name: 'github',
        type: 'input',
        message: "What is this engineer's Github profile?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      )
      team.push(engineer)
      console.log(team)
      createTeamMember()
    })
}

function addIntern() {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?",
      },
      {
        name: 'id',
        type: 'input',
        message: "What is the intern's employee ID?",
      },
      {
        name: 'email',
        type: 'input',
        message: "What is the intern's email address?",
      },
      {
        name: 'school',
        type: 'input',
        message: 'What school is the intern attending?',
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      )
      team.push(intern)
      console.log(team)
      createTeamMember()
    })
}

createManager()
