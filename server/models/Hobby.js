import { Schema, Model } from 'mongoose'
const hobbySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String
})

export const Hobby = Model('Hobby', hobbySchema)