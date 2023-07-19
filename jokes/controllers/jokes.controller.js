const Joke = require('../models/joke.model');

module.exports = {

    hello: (req, res) => {
        res.json({ message: "Hello World" });
    },

    getAllJokes: (req, res) => {
        Joke.find()
            .then(jokes => {
                res.json(jokes);
            })
            .catch(err => {
                res.status(500).json({ error: 'An error occurred while retrieving jokes.' });
            });
    },

    getJokeById: (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ error: 'Joke not found.' });
                }
                res.json(joke);
            })
            .catch(err => {
                res.status(500).json({ error: 'An error occurred while retrieving the joke.' });
            });
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(joke => {
                res.status(201).json(joke);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    },

    updateJoke: (req, res) => {

        Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, renValidators: true })
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ error: 'Joke not found.' });
                }
                res.json(joke);
            })
            .catch(err => {
                res.status(400).json({ error: 'Failed to update the joke.' });
            });
    },

    deleteJoke: (req, res) => {
        Joke.findByIdAndRemove(req.params.id)
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ error: 'Joke not found.' });
                }
                res.json({ message: 'Joke deleted successfully.' });
            })
            .catch(err => {
                res.status(400).json({ error: 'Failed to delete the joke.' });
            });
    },


//I COULDNT GET IT TO WORK...
    getRandomJoke: (req, res) => {
        Joke.countDocuments().exec((err, count) => {
            if (err) {
                return res.status(500).json({ error: 'An error occurred while retrieving jokes.' });
            }
            if (count === 0) {
                return res.status(404).json({ error: 'No jokes found.' });
            }
            const randomIndex = Math.floor(Math.random() * count);
            Joke.findOne().skip(randomIndex)
                .then(joke => {
                    res.json(joke);
                    console.log(joke);
                })
                .catch(err => {
                    res.status(500).json({ error: 'An error occurred while retrieving the joke.' });
                    console.log(err)
                });
        });
    },
};
