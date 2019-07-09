import Joi from '@hapi/joi';
import { validate } from '../validate';

/**
 * Post validation schema
 */
const postSchema = Joi.object().keys({
	title: Joi.string()
		.min(3)
		.required(),
	contents: Joi.string()
		.min(5)
		.required()
});

/**
 * Validate post body
 */
export const validatePost = (request, response, next) => {
	validate(request, response, next, postSchema);
};
