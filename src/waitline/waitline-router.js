/* eslint-disable strict */
const express = require('express');
const xss = require('xss');
const logger = require('../logger');
const waitlineService = require('./waitline-service');