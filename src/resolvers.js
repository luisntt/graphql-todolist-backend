const Todo = require('./models/Todo');

module.exports = {
  Query: {
    todos: () => Todo.find(),
  },

  Mutation: {
    createTodo: (_, { description, begin, end }) => Todo.create({ description, begin, end }),
  }
}