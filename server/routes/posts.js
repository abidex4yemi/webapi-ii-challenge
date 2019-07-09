/**
 * Module dependencies
 */
import express from 'express';
import { getPosts } from '../controllers/posts';

// Initializes express.Router instance
const Router = express.Router();

/**
 * All posts api route
 */

// [Get] Handle get all posts request
Router.get('/posts', getPosts);

export { Router as postsRouter };
