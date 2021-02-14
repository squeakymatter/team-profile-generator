const Employee = require('./Employee')

// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
    this.role = 'Engineer'
    this.icon = 'glasses'
  }
  getRole() {
    return this.role
  }
  getGithub() {
    return this.github
  }
  getIcon() {
    this.icon
  }
}

module.exports = Engineer
