//Import Thought model and Reaction schema
const { Thought, Reaction } = require('../models');

module.exports = {
  //Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    
  },
  createThought(req, res) {
    
  },
  updateThought(req, res) {
    
  },
  deleteThought(req, res) {
    
  },
  createReaction(req, res) {
    
  },
  deleteReaction(req, res) {
    
  },
}