const express = require('express');
const {ROLE} = require('../data')
const router = express.Router();
const {protect,authRole} = require("../middelware/auth")
const {getMovies,editMovies,deleteMovies,addMovies} = require('../controller/moviesFun');
const { ROLE } = require('../data');

router.route('/').get(protect,authRole(ROLE.USER),getMovies).post(protect,authRole(ROLE.USER),addMovies);
router.route('/').put(protect,authRole(ROLE.USER),editMovies).delete(protect,authRole(ROLE.USER),deleteMovies);

module.exports = router
