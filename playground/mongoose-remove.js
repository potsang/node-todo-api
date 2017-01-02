const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
Todo.findOneAndRemove({_id: '5869d26f78db0459272fb4a7'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5869d26f78db0459272fb4a7').then((todo) => {
  console.log(todo);
});
