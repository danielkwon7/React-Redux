import React from 'react';
import ReactDOM from 'react-dom';



class Todo extends React.Component {
  render() {
    return (

      <div>
        <h1>Todo App</h1>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Todo/>, document.getElementById('main'));
});

export default Todo;