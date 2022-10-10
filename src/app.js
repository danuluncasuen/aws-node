const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    name: "Johny",
    age: 30
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})