'use strict'

const Schema = use('Schema')

class SalesProductsSchema extends Schema {
  up () {
    this.create('sales_products', (table) => {
      table.increments()
      table.date('date').notNullable()
      table
        .integer('sale_id')
        .references('id')
        .inTable('sales')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      table
        .integer('product_id')
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      table.integer('amount').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales_products')
  }

}

module.exports = SalesProductsSchema
