const { forOfStatement } = require('@babel/types')
const { test } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test("Gets employee's role", () => {
  const role = 'Engineer'
  const engineer = new Engineer('Jane', 2, 'jane@foo.test')
  expect(engineer.getRole()).toBe(role)
})

test('Gets Github account', () => {
  const githubuser = 'janefoo'
  const engineer = new Engineer('Jane', 2, 'jane@foo.test', githubuser)
  expect(engineer.getGithub()).toBe(githubuser)
})
