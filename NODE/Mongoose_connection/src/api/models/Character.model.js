const mongoose = require("mongoose");

const Schema = mongoose.schema;

const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "fluido"],
      required: true,
    },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
