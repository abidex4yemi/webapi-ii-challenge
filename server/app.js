/**
 * Module dependencies
 */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { postsRouter } from './routes/posts';

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
app.use(cors());

// log all http request
app.use(logger('dev'));

// Handle all request on [posts]
app.use('/api/v1', postsRouter);

// [GET] Handle home route request
app.get('/', (request, response) => {
	return response.status(200).json({
		success: true,
		message: 'Welcome to JamJam blog',
		body: []
	});
});

// [all] Handle invalid request
app.all('*', (request, response) => {
	return response.status(404).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	});
});

// Handle core sever error
app.use((request, response, error) => {
	return response.status(error.status || 500).json({
		error
	});
});

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
