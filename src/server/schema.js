const mongoose from 'mongoose';

const Schema = mongoose.Schema;

const techniquesSchema = new Schema({
  technique: String,
  date: Date,
  category: String
})

model.exports = mongoose.model('Techniques', techniquesSchema);
