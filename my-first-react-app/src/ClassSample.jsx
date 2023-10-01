import React, { Component} from "react"

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(index) {
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" onChange={this.handleInputChange} value={this.state.inputVal}/>
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
     
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo}>{todo} <button onClick={() => this.handleDelete(index)}>Delete</button></li>
            
          ))}
        </ul>
      </section>
    )
  }
}

export default ClassInput;