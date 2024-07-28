import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    propertyName: {type: String, required: true},
    visitCount: {type: Number, default: 0}
})