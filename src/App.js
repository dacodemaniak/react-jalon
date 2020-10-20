import React from 'react';
import {JalonComponent} from './components/Jalon/Jalon.class'
import { ToolbarComponent } from './components/Toolbar/ToolbarComponent';
import CreateJalon from './components/Jalon/CreateJalon'
import './App.css';



class App extends React.Component {
  state = {
    jalons : [],
    fetchError: null,

  }

  componentDidMount() {
    fetch(
      `http://localhost:8080`
    ).then((response) => response.json())
    .then((result) => {
      console.log(`Received ${JSON.stringify(result)} from backend`)
      this.setState({jalons: result})
    }, (error) => {
      this.setState({fetchError: error})
    })
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
        
        { jalonIteration() }

        <CreateJalon />
      </div>
    )
  }
}

export default App