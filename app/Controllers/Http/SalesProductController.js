'use strict'

const Sp = use('App/Models/SalesProduct')
const Sale = use('App/Models/Sale')
const Product = use('App/Models/Product')
class SalesProductController {

  async index() {
    let sales = await Sp.all()
    return sales

  }


  async store({ request, response }) {
    let data = request.all()

    if (!await Sale.find(data.sale_id)) {
      return response.status(400).send({ error: 'Sales not exist!' })
    }
    if(!await Product.find(data.product_id)){
      return response.status(400).send({ error: 'Product no exist!' })
    }

    let sale = await Sp.create(data)

    if (!sale) {
      return response.status(400).send({ error: 'Failed to create sales product!' })
    }

    return sale

  }

  async show({ params, response }) {

    let sale = await Sp.find(params.id)
    if (!sale) {
      return response.status(400).send({ error: 'Product sale no exist!' })
    }

    await sale.load('products')

    return sale
  }


  async update({ params, request, response }) {

    let sale = await Sp.find(params.id)
    if (!sale) {
      return response.status(400).send({ error: 'Product sale no exist!' })
    }
    sale.merge(request.all())
    await sale.save()
    return response.status(400).send({ message: 'Succefuly to update product sale!' })
  }

  async destroy({ params, response }){

    let sale = await Sp.find(params.id)
    if(!sale){
      return response.status(400).send({ error: 'Product sale no exist!' })
    }

    await sale.delete()

    return response.status(400).send({ error: 'Succefuly to delete product sale!' })

  }



}

module.exports = SalesProductController
