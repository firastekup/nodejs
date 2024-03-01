const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Auth', authSchema);
