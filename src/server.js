require("express-async-errors")
const uploadConfig = require("./config/upload")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const express = require("express")
const app = express()
const PORT = 3000

const routes = require("./routes")

migrationsRun()

app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER))

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }
  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
