// write me mongo connection

import mongoose from 'mongoose';


export const mongoConnect = async () => {
    const uri = process.env.MONGO_URI
    try {
        await mongoose.connect(uri)
        // console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}
