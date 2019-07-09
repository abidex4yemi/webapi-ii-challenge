/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Add new comment using a valid post id
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export const addComment = async (request, response, next) => {
	try {
		// Get new comment body
		const commentDetails = request.body.sanitizedBody;

		// Get post id from comment body
		const postId = parseInt(commentDetails.post_id, 10);

		// Get post by id
		const post = await db.findById(postId);

		// Check if post exist
		if (!post.length) {
			return response.status(400).json({
				success: false,
				error: 'Invalid post id'
			});
		}

		// Add new comment
		const { id } = await db.insertComment(commentDetails);

		// Get newly created comment
		const createdComment = await db.findCommentById(id);

		return response.status(201).json({
			success: true,
			body: createdComment
		});
	} catch (error) {
		next(error);
	}
};
