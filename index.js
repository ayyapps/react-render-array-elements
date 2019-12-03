import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
const Aux = (props) => props.children;
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  users = [{name:'ayyappan', age:23},{name:'selva', age:23},
  ,{name:'alex', age:23}]
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        {this.users.map(x => {
            return(
              <React.Fragment>
            <div>{x.name}</div>
            <div>{x.age}</div>
            </React.Fragment>
          )
          })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
