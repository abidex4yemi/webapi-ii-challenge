/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Delete a post given the id is valid
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export const deletePost = async (request, response, next) => {
	try {
		// Get post id
		const id = parseInt(request.params.id, 10);

		// Validate if post id is a valid number
		if (Number.isNaN(id)) {
			return response.status(400).json({
				error: 'Invalid post id'
			});
		}

		// Delete post from database
		await db.remove();

		return response.status(200).json({
			success: true,
			message: 'Post deleted successfully'
		});
	} catch (error) {
		next(error);
	}
};
