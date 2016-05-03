import { Meteor } from 'meteor/meteor';
import {Tasks} from '/lib/collections.js';

Meteor.publish("tasks", function(){
  return Tasks.find({ author: this.userId })
});

Meteor.publish("delete", function(id){
  Tasks.remove({ _id: id })
});

Meteor.publish("update", function(id, value){
  Tasks.update(
    {_id: id},
    { $set: {taskText: value }}
  )
});

Meteor.publish("checked", function(id, value){
  Tasks.update(
    {_id: id},
    { $set: {checked: !value }}
  )
});
