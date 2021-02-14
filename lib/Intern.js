const Employee = require('./Employee')
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
    this.icon = 'user-graduate'
    this.role = 'Intern'
  }
  getSchool() {
    return this.school
  }
  getRole() {
    return this.role
  }
  getIcon() {
    return this.icon
  }
}

module.exports = Intern
