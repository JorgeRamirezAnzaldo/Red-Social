//Import Schema and model from mongoose
const { Schema, Types } = require('mongoose');
//Import helper to format date
const  { format_date }  = require('../utils/helper');

//Create Reaction schema
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: { 
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        //Set getter to format date
        get: (date) => {
            return format_date(date);
        }
      },
    },
    {
      //Include getters
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

//Export Reaction schema
module.exports = reactionSchema;