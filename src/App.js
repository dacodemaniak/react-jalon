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
        segment: 'props'
      },
      {
        id: 2,
        title: 'Item #2',
        segment: 'props'
      },
      {
        id: 3,
        title: 'Item #3',
        segment: 'props'
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
        <Jalon jalon={this.jalon} disabled={false} />
        <JalonComponent jalon={this.jalon} jalons={this.jalons} click={this.showItem} />
      </div>
    )
  }
}

export default App