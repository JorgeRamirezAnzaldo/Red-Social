//Import Schema and model from mongoose
const { Schema, Types } = require('mongoose');
//Import dateformat
const dateFormat = require('dateformat');

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
            return dateFormat(new Date(date), "mmm dS, yyyy, h:MM TT");
            /*const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let month = months[new Date(date).getMonth()];
            return `${month} ${new Date(date).getDate()}th, ${new Date(date).getFullYear()} at 
            ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;*/
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