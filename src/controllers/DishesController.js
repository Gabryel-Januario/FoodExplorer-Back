const knex = require("../database/knex")

class DishesController {
  async create(req, res) {
    const { title, description, price, ingredients } = req.body
    const { user_id } = req.params

    const { dishe_id } = await knex("dishes").insert({
      title,
      description,
      price,
      user_id,
    })

    const ingredientsInsert = ingredients.map((name) => {
      return {
        dishe_id,
        name,
        user_id,
      }
    })

    await knex("ingredients").insert(ingredientsInsert)

    res.json()
  }
}

module.exports = DishesController
