/**
 * Module dependencies
 */
import express from 'express';
import {
	getPosts,
	getPostById,
	addPost,
	updatePost,
	deletePost,
	getPostComments,
	getCommentById,
	addComment
} from '../controllers/posts';
import { validatePost, validateComment } from '../helpers/validation';

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

// [GET] Handle get all comments by post id
Router.get('/posts/:id/comments', getPostComments);

// [GET] Handle get comment by id
Router.get('/comments/:id', getCommentById);

// [GET] Handle add new comment by post id
Router.post('/comments', validateComment, addComment);

export { Router as postsRouter };
