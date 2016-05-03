import React from 'react';

import Task from '/imports/client/ui/components/Task.jsx';

class TaskList extends React.Component {
    render() {
        return (
              <div className="collection">
                {
                  this.props.tasks.map((task) => {
                    return <Task task={task} key={task._id} />
                  })
                }
              </div>
        )
    }
}

export default TaskList;
