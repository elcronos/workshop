import { Mongo } from 'meteor/mongo';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

const Tasks = new Mongo.Collection('tasks');

Tasks.helpers({
  getFullName(){
    return Meteor.users.findOne(this.author).username;
  },
  taskDate(){
    return moment(this.createdAt).fromNow();
  }
});

Tasks.allow({
  insert(userId, doc) {
    return true;
  },
  update(userId, doc, fields, modifier) {
    return true;
  },
  remove(userId, doc) {
    return true
  }
});

export {Tasks};
