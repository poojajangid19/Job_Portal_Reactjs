import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    title : String,
    required : true
})