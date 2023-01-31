//Import connection
const connection = require('../config/connection');
//Import User and Thought models
const { User, Thought } = require('../models');

//Define data array for users
const users = [
    {
        username: "lernantino",
        email: "lernantino@gmail.com",
    },
    {
        username: "amiko",
        email: "amiko@gmail.com",
    },
    {
        username: "john",
        email: "john@hotmail.com",
    },
    {
        username: "david",
        email: "david@outlook.com",
    },
]

//Define data array for thoughts
const thoughts = [
    {
        thoughtText: "Thoughts are the words of our minds",
        username: "amiko",
        createdAt: new Date(),
        reactions: [],
    },
    {
        thoughtText: "Here's a cool thought...",
        username: "lernantino",
        createdAt: new Date(),
        reactions: [],
    },
]

//Open connection and create seed data
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({}); //Delete all data for Thought
  await User.deleteMany({}); //Delete all data for User
  await User.collection.insertMany(users); //Create data for User
  await Thought.collection.insertMany(thoughts); //Create data for Thought
  //Display data
  console.table(users); 
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0); //Finish process
});
