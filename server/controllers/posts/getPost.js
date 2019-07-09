/**
 * Module dependencies
 */
import db from '../../models/db';

/**
 * Return all posts
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} next 
 */
export const getPosts = async (request, response, next) => {
	try {
		// fetch all posts
		const posts = await db.find();

		// Conditionally show message based on posts existent
		const message = posts.length === 0 ? 'No posts available' : `Retrieve ${posts.length} post`;

		return response.status(200).json({
			success: true,
			message,
			body: posts
		});
	} catch (error) {
		next(error);
	}
};
