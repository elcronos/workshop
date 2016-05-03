import {composeWithTracker} from 'react-komposer';

import TaskList from '/imports/client/ui/components/TaskList.jsx';
import {Tasks} from '/lib/collections.js';

composer = (onPropsChange, onData) => {
  const handle = Meteor.subscribe('tasks');
  if (handle.ready()) {
    const tasks = Tasks.find({},{sort: { createdAt: 1 }});
    onData(null, {tasks});
  }
}

export default composeWithTracker(composer)(TaskList);
