//Import Schema and model from mongoose
const { Schema, model } = require('mongoose');
//Import Reaction schema
const Reaction = require('./Reaction');
//Import helper to format date
const { format_date } = require('../utils/helper');

//Create schema for thought model
const thoughtSchema = new Schema(
    {
      thoughtText: { 
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        //Set getter to format date
        get: (date) => {
            return format_date(date);
        }
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [Reaction],
    },
    {
      //Include virtuals and getters
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );

//Create a virtual to get the number of reactions for the thought
thoughtSchema
.virtual('reactionCount')
// Getter
.get(function () {
  return this.reactions.length;
});

//Create Thought model using the proper schema
const Thought = model('Thought', thoughtSchema);

//Export Thought model
module.exports = Thought;
