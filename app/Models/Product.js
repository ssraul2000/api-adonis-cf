'use strict'

const Model = use('Model')

class Product extends Model {

  salesproducts(){
    return this.hasMany('App/Models/SalesProduct')
  }
}

module.exports = Product
