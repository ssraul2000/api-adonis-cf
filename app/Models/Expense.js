'use strict'

const Model = use('Model')

class Expense extends Model {


  user(){
    return this.belongsTo('App/Models/User')
  }

  payment(){
    return this.hasOne('App/Models/Payment')
  }


}

module.exports = Expense
