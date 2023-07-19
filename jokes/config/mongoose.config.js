mongoose  = require("mongoose");

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD
const cluster = process.env.ATLAS_CLUSTER
const db = process.env.ATLAS_DB


const connectionString =`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db}?retryWrites=true&w=majority`;


mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});
