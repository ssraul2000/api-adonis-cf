'use strict'

const Model = use('Model')

class SalesProduct extends Model {

  sale(){
    return this.belongsTo('App/Models/Sale')
  }

  products(){
    return this.belongsTo('App/Models/Product')
  }


}

module.exports = SalesProduct
