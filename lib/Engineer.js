const Employee = require('./Employee')

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
    return this.icon
  }
}

module.exports = Engineer
