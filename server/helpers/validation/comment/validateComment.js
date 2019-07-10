import Joi from '@hapi/joi';
import { validate } from '../validate';

/**
 * Comment validation schema
 */
const commentSchema = Joi.object().keys({
	text: Joi.string()
		.min(3)
		.trim()
		.required(),
	post_id: Joi.number()
		.integer()
		.positive()
		.required()
});

/**
 * Validate comment body
 */
export const validateComment = (request, response, next) => {
	validate(request, response, next, commentSchema);
};
