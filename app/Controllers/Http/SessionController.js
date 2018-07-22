'use strict'
const User = use('App/Models/User')
class SessionController {


  async store({ request, response, auth }) {
    let { username, password } = request.all()
    let user = await User.findBy({ 'username': username })

    if (!user) {
      return response.status(400).send({ error: 'User not found!' })
    }

    let token = await auth.attempt(username, password)

    if (!token) {
      return response.status(400).send({ error: 'Failed to authenticate user!' })
    }
    // await auth.login(user)


    return token

  }




}


module.exports = SessionController
