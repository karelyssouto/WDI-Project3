import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post';
import Reviews from './components/Reviews/Reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/posts/:postId' component={Post}/>
            <Route exact path='/reviews' component={Reviews}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
