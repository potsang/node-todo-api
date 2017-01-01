const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '586875250f39f7b032db735a';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

 // Todo.find({
 //   _id: id
 // }).then((todos) => {
 //   console.log('Todos', todos);
 // });
 //
 // Todo.findOne({
 //   _id: id
 // }).then((todo) => {
 //   console.log('Todo', todo);
 // });

 // Todo.findById(id).then((todo) => {
 //   if (!todo) {
 //     return console.log('Id not found');
 //   }
 //   console.log('Todo By Id', todo);
 // }).catch((e) => console.log(e));

var id = '58669ce2042ee66c56d693f2';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
