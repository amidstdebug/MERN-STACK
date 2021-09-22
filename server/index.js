import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);
// so basically what this thing does is that it handles the routing for link with /posts

app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://p2112646:p2112646@cluster0.rl7m5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
// mongoDB Atlas connection


mongoose.connect(CONNECTION_URL,)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

