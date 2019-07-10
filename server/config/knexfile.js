/**
 * Module dependencies
 */
const path = require('path');

// Get root directory absolute path
const rootDirectory = path.parse(__dirname).dir;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: { filename: `${rootDirectory}/models/lambda.db3` },
		useNullAsDefault: true,
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: '../models/migrations',
			tableName: 'dbmigrations'
		},
		seeds: { directory: '../models/seeds' }
	}
};
