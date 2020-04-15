const express = require('express');
const dbConnection = require('./configs/dbconfig');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const config = require('./configs/config');

//load the database here
dbConnection();

const app = express();

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//basic routes declarations
app.use('/', indexRouter);

//load them directly from the configs folder
const port = config.PORT;
const hostname = config.HOST;

app.listen(port, () => {
	console.log(`App is running on port ${port} at ${hostname}${port}`);
});
