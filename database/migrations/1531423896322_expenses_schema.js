'use strict'

const Schema = use('Schema')

class ExpensesSchema extends Schema {
  up() {
    this.create('expenses', (table) => {
      table.increments()
      table.boolean('status').notNullable().defaultTo(false)
      table.date('date').notNullable()
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.text('text').notNullable()
      table.float('value').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('expenses')
  }
}

module.exports = ExpensesSchema
