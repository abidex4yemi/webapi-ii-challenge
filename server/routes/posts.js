/**
 * Module dependencies
 */
import express from 'express';
import { getPosts, getPostById, addPost, updatePost, deletePost } from '../controllers/posts';
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

// [POST] Handle create new post request
Router.post('/posts', validatePost, addPost);

// [PUT] Handle update existing post record
Router.put('/posts/:id', validatePost, updatePost);

// [DELETE] Handle delete post request
Router.delete('/posts/:id', deletePost);

export { Router as postsRouter };
