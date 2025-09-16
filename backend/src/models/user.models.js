const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },

    email: {
        type: String,
        required: true
    },

    skills: {
        type: [String],
        required: true
    },

    interest: {
        type: [String],
        required: true
    }
},{
    timestamps:true
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel