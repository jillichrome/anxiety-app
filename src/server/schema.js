const mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: String,
  technique: String,
  comment: String
})

model.exports = mongoose.model('Posts', postsSchema);
