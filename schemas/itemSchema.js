// schemas/itemSchema.js

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    item_code: {
      type: Number,
      required: true,
      unique: true,
    },
    item_name: {
      type: String,
      required: true,
      unique: true,
      minlength : 1,
      maxlength : 15
    },
    item_stat: {
      health: { type: Number },
      power: { type: Number },
    },
  });

const Item = mongoose.model('Item', itemSchema);

export default Item;
