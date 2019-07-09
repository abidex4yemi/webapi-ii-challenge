/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Get single post using request parameter id
 * 
 * @param {*} request 
 * @param {*} response 
 */
export const getPostById = async (request, response) => {
	// Get post id
	const postId = parseInt(request.params.id, 10);

	// Validate if post id is a valid number
	if (Number.isNaN(postId)) {
		return response.status(400).json({
			error: 'Invalid post id'
		});
	}

	const post = await db.findById(postId);

	// Check if post is not found
	if (post.length === 0) {
		return response.status(404).json({
			success: true,
			body: post,
			message: 'No post with the requested id'
		});
	}

	return response.status(200).json({
		success: true,
		body: post
	});
};
