'use strict'

const Payment = use('App/Models/Payment')
const Expense = use('App/Models/Expense')
class PaymentController {

  async index({ response }) {

    let payments = await Payment.all()

    return payments

  }

  async store({ request, response }) {

    let data = request.all()
    let expense = await Expense.find(data.expense_id)

    if (!expense) {
      return response.status(400).send({ error: 'Expense not exits!' })
    }

    if (await Payment.findBy({ 'expense_id': data.expense_id })) {
      return response.status(400).send({ error: 'Payment already exist!' })
    }

    let payment = await Payment.create(data)

    if (!payment) {
      return response.status(400).send({ error: 'Failed to create payment!' })
    }

    expense.merge({ "status": true })
    await expense.save()


    return payment

  }

  async show({ params, response }) {

    let payment = await Payment.find(params.id)

    if (!payment) {
      return response.status(400).send({ error: 'Payment not found!' })
    }

    await payment.load('expenses')


    return payment

  }

  async update({ params, request, response }) {

    let payment = await Payment.find(params.id)


    if (!payment) {
      return response.status(400).send({ error: 'Payment not found!' })
    }

    payment.merge(request.all())
    await payment.save()


    return response.status(400).send({ message: 'Succefuly to update payment!', payment })

  }

  async destroy({ params, response }) {

    let payment = await Payment.find(params.id)

    if (!payment) {
      return response.status(400).send({ error: 'Payment not found!' })
    }

    await payment.delete()

    return response.status(400).send({ message: 'Succefuly to delete payment!' })

  }

}

module.exports = PaymentController
