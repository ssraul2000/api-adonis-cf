'use strict'

const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.date('date').notNullable()
      table.string('turn').notNullable()
      table.float('change').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }

}

module.exports = SalesSchema
