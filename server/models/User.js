import { Schema, Model } from 'mongoose'
const userSchema = new Schema({
    username: String,
    email: String,
    hobbies: [String]
})

export const User = Model('User', userSchema)