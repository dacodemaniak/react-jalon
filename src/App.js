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
    this.jalon = this.jalons[0]
  }

  showItem(item) {
    console.log(`Got an item ${item} from a component`)
  }


  render() {
    const jalonIteration = () => {
      return this.jalons.map((jalon) => {
        return <JalonComponent key={jalon.id} jalon={jalon} />
      })
    }

    return (
      <div>
        {jalonIteration()}
      </div>
    )
  }
}

export default App