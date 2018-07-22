'use strict'

const Model = use('Model')

class Payment extends Model {

  expenses(){
    return this.belongsTo('App/Models/Expense')
  }

}

module.exports = Payment
