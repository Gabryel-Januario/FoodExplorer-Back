require("express-async-errors")
const AppError = require("./utils/AppError")
const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
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

app.get("/:id", (req, res) => {
  res.send(`Server is running! and your params is: ${req.params.id}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
