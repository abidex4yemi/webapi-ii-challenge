/**
 * Module dependencies
 */
import express from 'express';
import { getPosts, getPostById, addPost } from '../controllers/posts';
import { validatePost } from '../helpers/validation';

// Initializes express.Router instance
const Router = express.Router();

/**
 * All posts api route
 */

// [Get] Handle get all posts request
Router.get('/posts', getPosts);

// [GET] Handle get post by id
Router.get('/posts/:id', getPostById);

Router.post('/posts', validatePost, addPost);

export { Router as postsRouter };
