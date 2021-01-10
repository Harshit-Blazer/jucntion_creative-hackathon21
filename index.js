const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var con = mysql.createConnection({
    host: "localhost",
    user: "harshit",
    password: "blazer"
  });

  app.get("/", function(req, res){
    res.render("index");
  });
  app.get("/contact", function(req, res){
    res.render("contact.ejs");
  });
  app.get("/aboutus", function(req, res){
    res.render("aboutus.ejs");
  });
  app.get("/slogin", function(req, res){
    res.render("student-login.ejs");
  });
  app.get("/alogin", function(req, res){
    res.render("admin-login.ejs");
  });
  app.post("/update", function(req, res){
    res.render("update-assignment.ejs");
  });
  app.post("/success", function(req, res){
    res.render("sucessfully-resister.ejs");
  });
  app.post("/assignment", function(req, res){
    res.render("assignments-page.ejs")
  });
  app.post("/register", function(req, res){
    res.render("register.ejs")
  });
  app.post("/success2", function(req, res){
    res.render("sucessfully-updated.ejs");
  });
  // app.post("/slogin", function(req, res){
  // }
  // })

app.listen(3000, function(){
    console.log("Server Started");
});
