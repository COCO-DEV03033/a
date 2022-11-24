const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const roomSchema = new Schema({
  creator: { type: String,
     required: true,
     ref:"Users" },
  room_name: {
    type: String,
    trim: true,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  users : [
    {
      userid : {type:String },
    }
  ]
});

exports.Rooms = mongoose.model("Rooms", roomSchema);
