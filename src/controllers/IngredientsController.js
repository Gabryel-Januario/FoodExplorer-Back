const knex = require("../database/knex")

class ingredientsController {
  async index(req, res) {
    const user_id = req.user.id

    const ingredients = await knex("ingredients").where({ user_id })

    return res.json(ingredients)
  }
}

module.exports = ingredientsController
