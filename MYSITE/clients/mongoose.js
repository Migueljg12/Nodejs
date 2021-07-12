import mongoose from 'mongoose'

const { DB_USER, DB_PASSWORD, DB_URL, DB_DATABASE } = process.env

const connectMongoose = () =>
    mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_DATABASE}?authSource=admin&replicaSet=atlas-js8ock-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
        { useNewUrlParser: true, useUnifiedTopology: true })

export default connectMongoose
