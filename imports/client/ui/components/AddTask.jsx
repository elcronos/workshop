import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import {Tasks} from '/lib/collections.js';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            taskText: ""
        };
    }
    onChange(event) {
        this.setState({taskText: this.refs.taskText.value});
    }
    addTask(event) {
        event.preventDefault();
        form = event.target;
        if (this.refs.taskText.value) {
            Tasks.insert({taskText: this.refs.taskText.value, createdAt: new Date(), author: Meteor.userId()});
            form.reset();
        }
        this.setState({taskText: ""});

    }
    render() {
        return (
            <form id="todoForm" onSubmit={this.addTask}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="addTask" type="text" ref="taskText" className="validate" onChange={this.onChange} autoFocus/>
                        <label for="addtask">Add a task...</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddTask
