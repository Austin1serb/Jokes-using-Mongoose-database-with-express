const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, 'Setup is required' ],
    
    minLength: [10, 'must be at least 10 characters']
  },
  punchLine: {
    type: String,
    required: [true, 'Punch line is required' ],
    minLength: [3, 'must be at least 3 characters']
  },

});

module.exports = mongoose.model('Joke', JokeSchema);
