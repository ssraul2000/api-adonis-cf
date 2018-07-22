'use strict'

const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.float('value').notNullable()
      table.integer('stock').notNullable()
      table.boolean('status').notNullable().defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }

}

module.exports = ProductsSchema
