'use strict'

const Sale = use('App/Models/Sale')
class SaleController {

  async index () {

    let sale = await Sale.all()

    return sale

  }


  async store ({ request, response }) {
    let data = request.all()

    if(await Sale.query().where({ "date":data.date, "turn":data.turn }).first()){
      return response.status(400).send({ erro: 'Sale already exist!' })
    }

    let sale = await Sale.create(data)

    if(!sale){
      return response.status(400).send({ error: 'Failed to create sale!' })
    }

    return sale

  }


  async show ({ params, response }) {

    let sale = await Sale.find(params.id)

    if(!sale){
      return response.status(400).send({ error: 'Sale no exist!' })
    }

    await sale.load('salesproduct')

    return sale

  }


  async update ({ params, request, response }) {

    let sale = await Sale.find(params.id)


    if(!sale){
      return response.status(400).send({ error: 'Sale no exist!' })
    }

    sale.merge(request.all())
    await sale.save()

    return response.status(400).send({ message: 'Succefuly to update sale!' })

  }

  async destroy ({ params, response }) {

    let sale = await Sale.find(params.id)
    if(!sale){
      return response.status(400).send({ erro: 'Sale not exist!' })
    }

    await sale.delete()

    return response.status(400).send({ message: 'Succefuly to delete sale!' })
  }

}

module.exports = SaleController
