/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Update a post with the given id and body
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export const updatePost = async (request, response, next) => {
	try {
		// Get post id
		const { id } = request.params;

		// Find post in database using the provided id
		const post = await db.findById(id);

		// Check if post exist in database
		if (post.length === 0) {
			return response.status(400).json({
				success: true,
				message: 'No post found with this id'
			});
		}

		// Get post body
		const postBodyForUpdate = request.body.sanitizedBody;

		// Update post
		await db.update(id, postBodyForUpdate);

		// Get updated post
		const updatedPost = await db.findById(id);

		return response.status(201).json({
			success: true,
			body: updatedPost
		});
	} catch (error) {
		next(error);
	}
};
