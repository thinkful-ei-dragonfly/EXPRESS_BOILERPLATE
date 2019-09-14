/* eslint-disable strict */
const express = require('express');
const xss = require('xss');
const {requireAuth} = require('../middleware/jwt-auth');
const LineService = require('./line-service');

const lineRouter = express.Router();
const jsonBodyParser = express.json();

// lineRouter
//   .use(requireAuth)

lineRouter
  .route('/')
  .get(async (req, res, next) => {
    try {
      let line = await LineService.getFullLine(
        req.app.get('db'),
        req.user.id,
      )

      line = line.map(g => {
        return LineService.serializeGuest(g)
      })

      res.json(
        line
      )
      next()
    } catch (error) {
      next(error)
    }
  })

  module.exports = lineRouter;