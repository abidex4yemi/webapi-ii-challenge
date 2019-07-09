/**
 * Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

/**
 * Module constants
 */
const PORT = process.env.PORT || 2019;

//Initializes express app
const app = express();

/**
 * Application level middle setup
 */

// parses application/json && parses url encoded
app.use(express.json());

// Enable cross origin resource sharing
// Note: this allows request from other site
app.use(express.cors());

// [GET] Handle home route request
app.get('/', (request, response) => {
	return response.status(200).json({
		success: true,
		message: 'Welcome to JamJam blog',
		body: []
	});
});

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
