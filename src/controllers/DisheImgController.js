const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class DisheImgController {
  async update(req, res) {
    const user_id = req.user.id
    const disheImgFilename = req.file.filename

    const diskStorage = new DiskStorage()

    const user = await knex("users").where({ id: user_id }).first()
    const dishe = await knex("dishes").where({ user_id: user.id }).first()

    if (!user) {
      throw new AppError(
        "Somente administradores autenticados podem mudar a imagem do prato ",
        401
      )
    }

    if (dishe.image_path) {
      await diskStorage.deleteFile(dishe.image_path)
    }

    const filename = await diskStorage.saveFile(disheImgFilename)
    dishe.image_path = filename

    await knex("dishes").update(dishe).where({ user_id: user.id })

    return res.json(dishe)
  }
}

module.exports = DisheImgController
