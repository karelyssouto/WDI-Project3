import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/posts/:postId' component={Post}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
