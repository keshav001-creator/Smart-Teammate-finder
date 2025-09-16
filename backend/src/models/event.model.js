const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
},{
    timestamps:true
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel
