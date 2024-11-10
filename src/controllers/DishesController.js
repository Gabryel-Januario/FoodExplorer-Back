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

    return res.json()
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

  async index(req, res) {
    const { title, user_id, ingredients } = req.query

    let dishes

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim())

      dishes = await knex("ingredients")
        .select(["dishes.id", "dishes.title", "dishes.user_id"])
        .where("dishes.user_id", user_id)
        .whereLike("title", `%${title}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dishe_id")
        .orderBy("dishes.title")
    } else {
      dishes = await knex("dishes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }

    const userIngredients = await knex("ingredients").where({ user_id })

    const dishesWithIngredients = dishes.map((dishe) => {
      const disheIngredients = userIngredients.filter(
        (ingredient) => ingredient.dishe_id === dishe.id
      )

      return {
        ...dishe,
        ingredient: disheIngredients,
      }
    })

    return res.json(dishesWithIngredients)
  }
}

module.exports = DishesController
