/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Get comment by id
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} next 
 */
export const getCommentById = async (request, response, next) => {
	try {
		// Get comment id
		const commentId = parseInt(request.params.id, 10);

		// Get comment by id from database
		const comment = await db.findCommentById(commentId);

		return response.status(200).json({
			success: true,
			body: comment
		});
	} catch (error) {
		next(error);
	}
};
