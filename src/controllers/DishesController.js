const { response } = require("express")
const knex = require("../database/knex")

class DishesController {
  async create(req, res) {
    const { title, description, price, ingredients } = req.body
    const { user_id } = req.params

    const [dishe_id] = await knex("dishes").insert({
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

  async show(req, res) {
    const { id } = req.params

    const dishe = await knex("dishes").where({ id }).first()
    const ingredients = await knex("ingredients")
      .where({ dishe_id: id })
      .orderBy("name")

    return res.json({
      ...dishe,
      ingredients,
    })
  }

  async delete(req, res) {
    const { id } = req.params

    await knex("dishes").where({ id }).delete()

    return res.json()
  }
}

module.exports = DishesController
