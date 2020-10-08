import React from 'react';
import {JalonComponent} from './components/Jalon/Jalon.class'
import { ToolbarComponent } from './components/Toolbar/ToolbarComponent';

import './App.css';



class App extends React.Component {
  state = {jalons : [
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
  }

  receiveJalon(jalon) {
    console.log(`State was : ${JSON.stringify(this.state)}`)
    
    const { jalons } = this.state

    const index = jalons.findIndex((obj) => obj.id === jalon.id)
    
    if (index !== -1) {
      jalons[index] = jalon

      console.log(`After update, state was : ${JSON.stringify(jalons)} for index value : ${index}`)
      this.setState(jalons)
    }
  }


  render() {
    const { jalons } = this.state
    
    const jalonIteration = () => {
      return jalons.map((jalon) => {
        return <JalonComponent key={jalon.id} jalon={jalon} changeState={this.receiveJalon.bind(this)} />
      })
    }

    return (
      <div>
        <ToolbarComponent jalons={jalons} />
        {jalonIteration()}
      </div>
    )
  }
}

export default App