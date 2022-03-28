const express=require("express");
const usersController=require("./src/controllers/user.controllers")
const app=express();
app.use(express.json());
app.use("/users",usersController);
module.exports=app;