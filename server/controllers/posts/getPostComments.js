/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Get all comment specific to a post using post id
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} next 
 */
export const getPostComments = async (request, response, next) => {
	try {
		// Get post id
		const postId = parseInt(request.params.id, 10);

		// Get post where id is equal to requested post comment id
		const post = await db.findById(postId);

		// Check if post exist
		if (!post.length) {
			return response.status(400).json({
				success: false,
				error: 'Invalid post id'
			});
		}

		// Get all comments where comment id matches post id
		const comments = await db.findPostComments(postId);

		return response.status(200).json({
			success: true,
			body: comments
		});
	} catch (error) {
		next(error);
	}
};
