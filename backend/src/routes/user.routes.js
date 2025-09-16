const express=require("express")
const router=express.Router()
const {registerHandler,getUserById}=require("../controllers/user.controller")



router.post("/register",registerHandler)
router.get("/:userId", getUserById);



module.exports=router