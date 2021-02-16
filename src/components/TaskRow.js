import React from 'react';
class TaskRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}
export default TaskRow;
