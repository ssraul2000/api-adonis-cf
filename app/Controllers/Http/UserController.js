'use strict'

const User = use('App/Models/User')
class UserController {

  async index({ response }) {
    let user = await User.all()

    return user

  }

  async store({ request, response }) {

    let data = request.all()

    if(await User.findBy({ "username": data.username })){
      return response.status(400).send({ error: 'User already exists!'  })
    }

    let user = await User.create(data)

    if(!user){
      return response.status(400).send({ error: 'Failed to create user!' })
    }
    return user

  }

  async show({ params, response }) {

    let user = await User.find(params.id)

    if(!user){
      return response.status(400).send({ error: 'User not found' })
    }

    await user.load('expenses')
    return user
  }

  async update({ params, request, response }) {

    let user = await User.find(params.id)

    if(!user){
      return response.status(400).send({ error: 'User not found!' })
    }

    user.merge(request.all())

    await user.save()

    return user

  }

  async destroy({ params , response }) {

    let user = await User.find(params.id)

    if(!user){
      return response.status(400).send({ error: 'User not found!' })
    }

    await user.delete()

  }


}

module.exports = UserController
