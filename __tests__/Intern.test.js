const { test, expect } = require('@jest/globals')
const Intern = require('../lib/Intern')

test("Get intern's school", () => {
  const school = 'UC Berkeley'
  const intern = new Intern('Mary', 3, 'mary@foo.test', school)
  expect(intern.getSchool()).toBe(school)
})

test("Get intern's role", () => {
  const role = 'Intern'
  const intern = new Intern('Mary', 3, 'mary@foo.test', 'UC Berkeley')
  expect(intern.getRole()).toBe(role)
})
