// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
    this.icon = 'mug-hot'
  }
  getRole() {
    return 'Manager'
  }
  getOfficeNumber() {
    return this.officeNumber
  }
  getIcon() {
    return this.icon
  }
}

module.exports = Manager
