import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About.js';
import {v4 as uuid} from "uuid"; 
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        timeExpected: 0.5,
        completed: false
      },
      {
        id: uuid(),
        title: 'Learn React using course',
        timeExpected: 4,
        completed: false
      },
      {
        id: uuid(),
        title: 'Read a book',
        timeExpected: 1.5,
        completed: false
      }
    ]
  }
  //checkbox to toggle variable 
  toggleComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //delete Todo (item)
  deleteItem = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }
  //Add todo (item)
  addTodo = (title, timeExpected) => {
    const newTodo = {
      id: uuid(),
      title,
      timeExpected,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  // addTitleTodo = (title) => {
  //   const newTodo = {
  //     id: uuid(),
  //     title,
  //     timeExpected: 0,
  //     completed: false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo]})
  // }
  // addTimeExpectedTodo = (timeExpected) => {
  //   const newTodo1 = {
  //     id: uuid(),
  //     title: '',
  //     timeExpected,
  //     completed: false
  //   }
  //   this.setState({ todos: [...this.state.todos, newTodo1]})
  // }
  render() {
    return (
      <Router>
        <div className="App">
        <div className="Container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo 
                addTodo={this.addTodo}
                // addTitleTodo={this.addTitleTodo}
                // addTimeExpectedTodo={this.addTimeExpectedTodo}
              />
              <Todos 
                todos={this.state.todos} 
                toggleComplete={this.toggleComplete} 
                deleteItem={this.deleteItem}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
          
        </div>
        
      </div>
      </Router>    
    );
  }
}

export default App;
