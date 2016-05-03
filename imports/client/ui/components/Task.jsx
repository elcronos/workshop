import React from 'react';

class Task extends React.Component {
    constructor(props) {
      super(props);
      this.handleClickEdit = this.handleClickEdit.bind(this);
      this.handleClickDelete = this.handleClickDelete.bind(this);
    }
    handleClickEdit(){
      Meteor.subscribe('update',this.props.task._id, 'Edited')
    }
    handleClickDelete(){
      Meteor.subscribe('delete', this.props.task._id)
    }
    render() {
        return (
            <div className="collection-item row">
                <div className="col s3">{this.props.task.taskText}</div>
                <div className="col s3">{this.props.task.taskDate()}</div>
                <button onClick={this.handleClickEdit}><i id="edit" className="small material-icons">mode_edit</i></button>
                <button onClick={this.handleClickDelete}><i id="remove" className="small material-icons">delete</i></button>
            </div>
        )
    }
}

export default Task
