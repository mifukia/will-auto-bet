const express = require("express")
const app = express()

app.get("/api/users", (req, res) => {
  res.json([{
    id: 1, name: "mifukia"
  }, {
    id: 2, name: "kianu"
  }])
})

app.listen(9999)
