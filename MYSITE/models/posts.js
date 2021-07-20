import mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new Schema({
    message: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
})

export default mongoose.model('posts', PostSchema)