/**
 * Module dependencies
 */
import Joi from '@hapi/joi';

export const validate = (request, response, next, schema) => {
	// validate request body against predefined schema
	const { error, value } = Joi.validate(request.body, schema, {
		abortEarly: false
	});

	// check for validation error
	if (error) {
		// Format error object of JOI
		const errors = error.details.map(current => ({
			key: current.context.key,
			message: current.message.replace(/['"]/g, '')
		}));

		return response.status(400).json({ errors });
	}

	//Note: create a new key `sanitizedBody` to the body with sanitized value
	request.body.sanitizedBody = value;

	next();
};
