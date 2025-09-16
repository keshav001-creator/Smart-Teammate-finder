const userModel=require("../models/user.models")
const jwt=require("jsonwebtoken")

async function registerHandler(req,res){

    
    const { userName: { firstName, lastName }, userEmail, userSkills, userInterest } = req.body

    const isUserExist = await userModel.findOne({
        email:userEmail
    })

    if (isUserExist) {
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const User = await userModel.create({
        fullName:{
            firstName,lastName
        },
        email:userEmail,
        skills:userSkills,
        interest:userInterest
    })


    const token = jwt.sign({
        id: User._id
    }, process.env.JWT_SECRET_KEY)

    res.cookie("token", token)     

    res.status(201).json({
        message: "user created successfull",
        User
    })
}


async function getUserById(req, res) {
  try {
    const user = await userModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}



module.exports={registerHandler,
    getUserById
}