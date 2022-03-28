const { Router } = require("express");
const express=require("express");
// const {body ValidationResult}=require("../models/user.models");
const User=require("../models/user.models");
const router=express.Router();
// Router.Post(
//     "/",
//     body("firstName")
//     .trim()
//     .not()
//     .isEmpty()
//     .bail()
//     .withMessage("First Name Cannot be Empty"),
//     body("email")
//     .isEmail()
//     .withMessage("Email Cannot be empty"),
// )

module.exports=router;