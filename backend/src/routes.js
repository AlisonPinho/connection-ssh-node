const express = require('express')
const routes = express.Router()

const UsersController = require('./controllers/UsersController')
const SessionController = require('./controllers/SessionController')
const ConfigAdmOnuController = require('./controllers/ConfigAdmOnuController')
const ConfigOnuController = require('./controllers/ConfigOnuController')




routes.get('/users',UsersController.index) 
routes.post('/users', UsersController.create)         //Users//
routes.delete('/users/:id', UsersController.delete)
    
routes.post('/sessions', SessionController.create)    //Login //

routes.get('/config/adm/onu', ConfigAdmOnuController.index)  
routes.post('/config/adm/onu', ConfigAdmOnuController.create)  //Admintration config ONUs

routes.post('/config/onu', ConfigOnuController.index)

module.exports = routes