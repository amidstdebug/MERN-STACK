// express handles the RECEIVING of routing of http requests sent by axios API


import express from 'express'
import {createPost, getPosts} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getPosts)
router.get('/', createPost)

export default router