//Import User and Thought models
const { User, Thought } = require('../models');

module.exports = {
  //Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    
  },
  createUser(req, res) {
    
  },
  updateUser(req, res) {
    
  },
  deleteUser(req, res) {
    
  },
  createFriend(req, res) {
    
  },
  deleteFriend(req, res) {
    
  },

}