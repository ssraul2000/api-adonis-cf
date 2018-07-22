'use strict'

const Schema = use('Schema')

class PaymentsSchema extends Schema {
  up() {
    this.create('payments', (table) => {
      table.increments()
      table.date('date').notNullable()
      table
        .integer('expense_id')
        .references('id')
        .inTable('expenses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('payments')
  }
}

module.exports = PaymentsSchema
