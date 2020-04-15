const mongoose = require('mongoose');

//get the db connection string
const dbCs = 'mongodb://127.0.0.1:27017/dbname';

//a function that handles the db connection
const dbConnection = () => {
	mongoose
		.connect(dbCs, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Successfully connected to the database');
		})
		.catch((err) => {
			console.error(err.message);
		});
};

module.exports = dbConnection;
