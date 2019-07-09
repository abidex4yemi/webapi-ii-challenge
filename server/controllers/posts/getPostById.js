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
	const postId = parseInt(request.params, 10);

	if (typeof postId !== 'number') {
		return response.status(400).json({
			error: 'Invalid user id'
		});
	}

	const post = await db.findById(postId);

	return response.status(200).json({
		success: true,
		body: post
	});
};
