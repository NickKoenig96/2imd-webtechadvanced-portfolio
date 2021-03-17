const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000;
const routerMessages = require("./routers/api/v1/messages");
const pug = require("pug");

app.set("view engine", "pug");

app.get("/",function (req, res)  {
  res.render("index", {
    title: "lab5",
    homepageTitle: "Welkom op mijn eenvoudige homepage",
    intro: "Er valt nog niet veel te zien, maar dat komt nog wel :) "
  })
})

mongoose.connect('mongodb://localhost:27017/lab5',{useNewUrlParser: true, useUnifiedTopology: true});

app.use("/api/v1/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})