'use strict'

const Model = use('Model')

class Sale extends Model {

  salesproduct(){
    return this.hasMany('App/Models/SalesProduct')
  }


}

module.exports = Sale
