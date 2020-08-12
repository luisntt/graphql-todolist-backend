const mongoose =  require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: String,
  begin: String,
  end: String,
})

module.exports = mongoose.model('Todo', TodoSchema);