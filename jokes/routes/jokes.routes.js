const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes.controller');

router.get('/', jokesController.hello);
router.get('/jokes', jokesController.getAllJokes);
router.get('/jokes/:id', jokesController.getJokeById);
router.post('/jokes', jokesController.createJoke);
router.patch('/jokes/:id', jokesController.updateJoke);
router.delete('/jokes/:id', jokesController.deleteJoke);
router.get('/jokes/random', jokesController.getRandomJoke);
module.exports = router;
