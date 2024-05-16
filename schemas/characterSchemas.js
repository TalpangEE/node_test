// schemas/characterSchema.js

import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  character_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minlength : 1,
    maxlength : 50
  },
  health: {
    type: Number,
    default: 500,
  },
  power: {
    type: Number,
    default: 100,
  },
});

const Character = mongoose.model('Character', characterSchema);

export default Character;
