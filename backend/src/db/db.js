const mongoose = require("mongoose")


async function connectDB() {

        await mongoose.connect(process.env.MONGO_DB_URL)
        .then(()=>{
                console.log("connected to the port 3000")
        }).catch(err=>{
                console.log(err)
        })
    
}


module.exports=connectDB