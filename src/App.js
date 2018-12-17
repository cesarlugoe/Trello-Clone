import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
    
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
