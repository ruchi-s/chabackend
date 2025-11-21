require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT ;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
  res.send("This is the about page")
})

app.get("/contact",(req,res) =>{
    res.send("<h1>this is contact page</h1>")
})

app.get("/youtube",(req,res) =>{
   res.send("youtube")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
