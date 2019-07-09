/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Insert new post
 * 
 * @param {*} request 
 * @param {*} response 
 */
export const addPost = async (request, response, next) => {
	try {
		// Get post from request body
		const post = request.body.sanitizedBody;

		// Insert new post
		const { id } = await db.insert(post);

		// Get newly persisted post
		const newPost = await db.findById(id);

		return response.status(201).json({
			success: true,
			body: newPost
		});
	} catch (error) {
		next(error);
	}
};
