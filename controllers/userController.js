//Import User and Thought models
const { User, Thought } = require('../models');

module.exports = {
  //Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //Get one single user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that id' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //Update an user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this id' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Delete an user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that id' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } }) //Delete all thoughts created by the deleted user
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted' }))
      .catch((err) => res.status(500).json(err));
  },
  //Create a friend for an user by ID
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }, //Add friend to the array
      { runValidators: true, new: true}
    )
    .then((user) =>
        !user
          ? res.status(404).json({
              message: 'No user found with that id',
            })
          : res.json('Friend added')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Delete a friend for an user by ID
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $pull: { friends: req.params.friendId } }, //Remove friend from the array
      { runValidators: true, new: true}
    )
    .then((user) =>
        !user
          ? res.status(404).json({
              message: 'No user found with that id',
            })
          : res.json('Friend deleted')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

}