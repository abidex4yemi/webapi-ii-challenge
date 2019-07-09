/**
 * Module dependencies
 */
import express from 'express';
import { getPosts, getPostById } from '../controllers/posts';

// Initializes express.Router instance
const Router = express.Router();

/**
 * All posts api route
 */

// [Get] Handle get all posts request
Router.get('/posts', getPosts);

// [GET] Handle get post by id
Router.get('/posts/:id', getPostById);

export { Router as postsRouter };
