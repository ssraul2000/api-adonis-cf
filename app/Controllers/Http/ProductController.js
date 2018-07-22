'use strict'

const Product = use('App/Models/Product')
class ProductController {

  async index() {
    let products = await Product.all()

    return products

  }


  async store({ request, response }) {
    let data = request.all()

    if (await Product.findBy({ 'name': data.name })) {
      return response.status(400).send({ error: 'Product already exist!' })
    }

    let product = await Product.create(data)

    if (!product) {
      return response.status(400).send({ error: 'Failed to create product!' })
    }

    return product

  }


  async show({ params, response }) {

    let product = await Product.find(params.id)

    if(!product){
      return response.status(400).send({ error: 'Prodct not found!' })
    }

    return product

  }


  async update({ params, request, response }) {
    let product = await Product.find(params.id)
    if(!product){
      return response.status(400).send({ error: 'Product no exist!' })
    }

    product.merge(request.all())
    await product.save()

    return response.status(400).send({ message: 'Succefuy to update product!' })

  }


  async destroy({ params, response }) {

    let product = await Product.find(params.id)

    if(!product){
      return response.status(400).send({ errro: 'Product no exist!' })
    }

    await product.delete()

    return response.status(400).send({ message: 'Succefuly to delete product!' })

  }


}

module.exports = ProductController
