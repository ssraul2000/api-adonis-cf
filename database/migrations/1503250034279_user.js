'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.boolean('type').notNullable()
      table.string('name').notNullable()
      table.string('telefone').notNullable()
      table.string('endereco').notNullable()
      table.string('username', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('status').notNullable().defaultTo(true)
      table.string('tokenResetPass')
      table.date('dateExpirenPass')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
