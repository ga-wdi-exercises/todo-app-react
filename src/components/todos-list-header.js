import React, {Component} from 'react';

class TodosListHeader extends Component {
    render() {
        return (
            <thead>
                <tr className="warning">
                    <th><h4>Task</h4></th>
                    <th><h4>Action</h4></th>
                </tr>
            </thead>
        );
    }
}

export default TodosListHeader
