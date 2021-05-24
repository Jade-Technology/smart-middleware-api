const express = require('express');
const AuthController = require('./controllers/auth.controller');
const HealthController = require('./controllers/health.controller');
const routes = express.Router();

routes.get('/health-check', HealthController.healthCheck);
routes.post('/auth/sign', AuthController.signIn);
routes.use('*', AuthController.authenticationCheck);

module.exports = routes;