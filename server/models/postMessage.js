import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: String,
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()

        }

    }
)
// this is the schema/template used to create items
// inside the mongoose database


const PostMessage = mongoose.model('PostMessage', postSchema)
// mongoose.model( name of model, name of schema)


export default PostMessage;
