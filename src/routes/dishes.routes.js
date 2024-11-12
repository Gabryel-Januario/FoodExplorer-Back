const { Router } = require("express")
const DishesController = require("../controllers/DishesController")
const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const DisheImgController = require("../controllers/DisheImgController")
const dishesRoutes = Router()

const uploadConfig = require("../config/upload")
const multer = require("multer")
const upload = multer(uploadConfig.MULTER)

const dishesController = new DishesController()
const disheImgController = new DisheImgController()

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.get("/", dishesController.index)
dishesRoutes.post("/", dishesController.create)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.delete("/:id", dishesController.delete)
dishesRoutes.patch(
  "/disheimg",
  ensureAuthenticated,
  upload.single("disheimg"),
  disheImgController.update
)

module.exports = dishesRoutes
