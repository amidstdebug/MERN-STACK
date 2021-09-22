//this file handles the functions (controllers) that will be used
//in the posts.js file located in /routes

import PostMessage from "../models/postMessage.js";

// https://restfulapi.net/http-status-codes/ for http status codes

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    //not too sure that this is
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message})
    }
}