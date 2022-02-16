const express=require("express");
const auth = require("../middelware/auth");
const { signUp, login, getUser } = require("../middelware/user.controllers");
const { signUpRules, validator } = require("../middelware/validator");
  const router=express.Router();
  router.post("/singUp",signUpRules(),validator,signUp)
 router.post("/login",login)
 router.get("/get",auth,getUser)

  module.exports=router