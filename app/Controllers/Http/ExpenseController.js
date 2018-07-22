'use strict'

const Expense = use('App/Models/Expense')
const User = use('App/Models/User')
class ExpenseController {

  async index({ response }) {
    let expenses = await Expense.all()

    return expenses

  }

  async store({ request, response }) {
    let data = request.all()

    if (!await User.find(data.user_id)) {
      return response.status(400).send({ error: 'User not found!' })
    }

    let expenses = await Expense.create(data)

    if (!expenses) {
      return response.status(400).send({ error: 'Failed to create expense!' })
    }

    return expenses

  }

  async show({ params, request, response }) {

    let expenses = await Expense.find(params.id)

    if (!expenses) {
      return response.status(400).send({ error: 'Expense not found!' })
    }

    return expenses
  }

  async update({ params, request, response }) {

    let expenses = await Expense.find(params.id)

    if(!expenses){
      return response.status(400).send({ error: 'Expense not found!' })
    }

    expenses.merge(request.all())

    await expenses.save()

    return response.status(200).send({ message: 'Succefuly to update Expense!', expenses })

  }

  async destroy({ params, request, response }) {

    let expenses = await Expense.find(params.id)

    if(!expenses){
      return response.status(400).send({ error: 'Expense not found!' })
    }

    await expenses.delete()
    return response.status(200).send({  message: 'Succefuly to delete Expense!' })

  }


}

module.exports = ExpenseController
