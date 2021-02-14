const Employee = require('../lib/Employee')

test('Creates new Employee object', () => {
  const employee = new Employee()
  expect(typeof employee).toBe('object')
})

test("Gets employee's name", () => {
  const name = 'John'
  const employee = new Employee(name)
  expect(employee.getName()).toBe(name)
})

test('Gets employee ID', () => {
  const id = 1
  const employee = new Employee('John', id)
  expect(employee.getId()).toBe(id)
})

test('Gets employee email', () => {
  const email = 'john@foo.test'
  const employee = new Employee('John', 1, email)
  expect(employee.getEmail()).toBe(email)
})

test("Get's employee's role", () => {
  const role = 'Employee'
  const employee = new Employee('John', 1, 'john@foo.test')
  expect(employee.getRole()).toBe(role)
})
