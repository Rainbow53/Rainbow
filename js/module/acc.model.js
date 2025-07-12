import mongoose from "mongoose"

const accSchema = new mongoose.Schema({
    accname :String,
    city  :String,
},{timestamps:True})

export const acc = mongoose.model("Acc",accSchema)