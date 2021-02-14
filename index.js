const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const team = []

const managerIcon = 'mug-hot'
const glassesIcon = 'glasses'
const internIcon = 'user-graduate'

function createTeam() {
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
        generateHtml()
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
        message: "What is this engineer's Github profile user name?",
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

function generateHtml() {
  const html = []
  const htmlBoilerPlate = `
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">

  <title>Team Profile</title>
</head>

<body>
  <div class="container p-4">
    <header class="page-header p-4 bg-danger">
      <h3 class="text-center text-light">My Team
      </h3>
    </header>
  </div>
  <div class="container px-5">
    <div class="row justify-content-center">`

  const htmlClosingTags = `
</div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
  crossorigin="anonymous"></script>
</body>
</html>`
  html.push(htmlBoilerPlate)

  for (let teammate of team) {
    let moreInfo
    if (teammate.officeNumber) {
      moreInfo = `Office Number: ${teammate.officeNumber}`
    }
    if (teammate.school) {
      moreInfo = `School: ${teammate.school}`
    }
    if (teammate.github) {
      moreInfo = `GitHub: <span><a href="https://github.com/${teammate.github}">${teammate.github}`
    }
    let teammateCard = `
    <div class="col-sm-4 pb-4">
    <div class="card shadow mx-4">
      <div class="card-body bg-primary text-light">
        <h5 class="card-title"><span><i class="fas fa-${teammate.icon}"></i></span> ${teammate.name}</h5>
        <p class="card-text">${teammate.role}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: <span>Employee ID: ${teammate.id}</span></li>
        <li class="list-group-item">Email: <span><a href="mailto:${teammate.email}">${teammate.email}</a></span></li>
        <li class="list-group-item">${moreInfo}</li>
      </ul>
    </div>
  </div>`
    html.push(teammateCard)
  }
  html.push(htmlClosingTags)
  fs.writeFile(`./dist/index.html`, html.join(''), function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(
      'index.html has been successfully created and saved to the `dist` directory.'
    )
  })
}

createTeam()
