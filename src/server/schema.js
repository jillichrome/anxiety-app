const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const techniquesSchema = new Schema({
  technique: String,
  date: Date,
  category: String
})

const Technique = mongoose.model('Technique', techniquesSchema);

module.exports = Technique;
