const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    image: {type:String,required:true},
})

const ServiceModel = mongoose.model("Services",ServiceSchema)
module.exports = ServiceModel
