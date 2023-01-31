//Import Schema and model from mongoose
const { Schema, model } = require('mongoose');

//Create schema for user model
const userSchema = new Schema(
    {
      username: { 
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        //Include validation for the email using a regex
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email address"]
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
      ],
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
      ],
    },
    {
      //Include virtuals
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

//Create a virtual to get the number of friends for the user
userSchema
.virtual('friendCount')
// Getter
.get(function () {
  return this.friends.length;
});

//Create User model using the proper schema
const User = model('User', userSchema);

//Export User model
module.exports = User;
