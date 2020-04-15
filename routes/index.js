const indexRouter = require('express').Router();
const controllers = require('../controller/index');

indexRouter.get('/', controllers.indexCtrl);

module.exports = indexRouter;
