import React from 'react';
import {JalonComponent} from './components/Jalon/Jalon.class'
import { ToolbarComponent } from './components/Toolbar/ToolbarComponent';

import './App.css';
import { Layout } from './components/Layout/Layout';



class App extends React.Component {
  state = {jalons : []}

  componentDidMount() {
    const persistentDatas = localStorage.getItem('jalons')
    if (persistentDatas) {
      this.setState({jalons: JSON.parse(persistentDatas)})
    }
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