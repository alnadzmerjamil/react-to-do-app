import logo from './logo.svg';
import './App.css';
import TaskRow from './components/TaskRow';
import React from 'react';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    tasks: [
      {
        name: 'eat',
        status: 'done',
      },
      {
        name: 'code',
        status: 'done',
      },
      {
        name: 'sleep',
        status: 'pending',
      },
    ],
    doneTask: [],
    pendingTask: [],
    newTaskInput: '',
    firstName: '',
    lastName: '',
    status: '--Select--',
    firstNameValue: [],
  };
  componentDidMount() {
    let doneTaskCopy = this.state.doneTask.slice(0);
    let pendingTaskCopy = this.state.doneTask.slice(0);
    this.state.tasks.forEach(function (task) {
      if (task.status === 'pending') {
        pendingTaskCopy.push(task);
      } else if (task.status === 'done') {
        doneTaskCopy.push(task);
      }
    });
    this.setState({
      pendingTask: pendingTaskCopy,
      doneTask: doneTaskCopy,
    });
  }
  newTaskInputHandler = (event) => {
    this.setState({
      newTaskInput: event.target.value,
    });
  };
  // firstNameHandler = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };
  // lastNameHandler = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };
  optionHandler = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  // btnClick = () => {
  //   this.setState({
  //     firstName: '',
  //     lastName: '',
  //   });
  // };
  btnHandler = () => {
    let doneTaskCopy = this.state.doneTask.slice(0);
    let pendingTaskCopy = this.state.pendingTask.slice(0);
    if (this.state.status == 'pending') {
      pendingTaskCopy.push({
        name: this.state.newTaskInput,
        status: this.state.status,
      });
    } else if (this.state.status == 'done') {
      doneTaskCopy.push({
        name: this.state.newTaskInput,
        status: this.state.status,
      });
    } else {
      return alert('selct status');
    }
    // pendingTaskCopy.push({
    //   name: this.state.newTaskInput,
    //   status: this.state.status,
    // });
    this.setState({
      pendingTask: pendingTaskCopy,
      newTaskInput: '',
      doneTask: doneTaskCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <Route path="/home">
          <h2>This is Home Page</h2>
        </Route>
        <Route path="/about">
          <h2>This is Home Page</h2>
        </Route>
        <Route path="/gallery">
          <h2>This is Home Page</h2>
        </Route>
        <header className="App-header">
          <h4>EVENT HANDLING ACTIVITY </h4>
          {/* <span>
            First Name:{' '}
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.firstNameHandler(event)}
            />
          </span>
          <span>
            Last Name:{' '}
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.lastNameHandler(event)}
            />
          </span>
          <div>
            <button onClick={this.btnClick}>RESET</button>
          </div>
          <div className="div-forfname">
            Welcome, <span>{this.state.firstName}</span>{' '}
            <span>{this.state.lastName}</span>
          </div> */}

          <div className="all-container">
            <div className="div-input">
              <input
                required
                className="input-task"
                type="text"
                value={this.state.newTaskInput}
                onChange={(event) => this.newTaskInputHandler(event)}
              />
              <span>
                <select
                  placeholder="Select status"
                  onChange={(event) => this.optionHandler(event)}
                >
                  <option>--Select--</option>
                  <option>pending</option>
                  <option>done</option>
                </select>
              </span>
              <button value="submit" onClick={this.btnHandler}>
                Add Task
              </button>
            </div>
            <div className="div-table">
              <table>
                <thead>
                  <tr>
                    <th>Done Task</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.doneTask.map(function (done) {
                    return <TaskRow key={done.name} name={done.name} />;
                  })}
                </tbody>
              </table>
            </div>
            <div className="div-table">
              <table>
                <thead>
                  <tr>
                    <th>Pending Task</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.pendingTask.map(function (pending) {
                    return <TaskRow key={pending.name} name={pending.name} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
