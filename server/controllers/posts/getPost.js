/**
 * Module dependencies
 */
import db from '../../models/db';

export const getPosts = async (request, response) => {
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
