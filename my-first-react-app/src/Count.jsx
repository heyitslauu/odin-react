import { Component } from "react";
import PropTypes from 'prop-types';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        The Number of todos is : {this.props.todos.length}
      </div>
    )
  }
}

Count.propTypes = {
  todos: PropTypes.array
}

export default Count;