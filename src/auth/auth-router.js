/* eslint-disable strict */
const express = require('express');
const AuthService = require('./auth-service');
const {requireAuth} = require('../middleware/jwt-auth');