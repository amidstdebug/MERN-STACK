// axios API handles the SENDING of http requests

import axios from "axios";

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)

// this is used to fetch all the get requests from the url and then axios will export it to the express
// side, which will then be used in the nodejs framework