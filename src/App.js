import React from 'react';
import {JalonComponent} from './components/Jalon/Jalon.class'

import './App.css';

import {Jalon, JalonViaCreate} from './components/Jalon/Jalon.js'

class App extends React.Component {
  constructor() {
    super()
    this.jalons = [
      {
        id: 1,
        title: 'Item #1',
        segment: 'props',
        viewed: true
      },
      {
        id: 2,
        title: 'Item #2',
        segment: 'props',
        viewed: false
      },
      {
        id: 3,
        title: 'Item #3',
        segment: 'props',
        viewed: false
      }      
    ]
    this.jalon = this.jalons[1]
  }

  showItem(item) {
    console.log(`Got an item ${item} from a component`)
  }

  render() {
    return (
      <div>
        <JalonComponent jalon={this.jalon} />
      </div>
    )
  }
}

export default App