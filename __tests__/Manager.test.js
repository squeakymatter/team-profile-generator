const { expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test("Get manager's role", () => {
  const role = 'Manager'
  const manager = new Manager('Sam', 4, 'sam@foo.test', '555-555-5555')
  expect(manager.getRole()).toBe(role)
})

test("Get manager's office number", () => {
  const officeNo = '555-555-5555'
  const manager = new Manager('Sam', 4, 'sam@foo.test', officeNo)
  expect(manager.getOfficeNumber()).toBe(officeNo)
})

test("Get manager's icon", () => {
  const managerIcon = 'mug-hot'
  const manager = new Manager('Sam', 4, 'sam@foo.test', '101')
  expect(manager.getIcon()).toBe(managerIcon)
})
