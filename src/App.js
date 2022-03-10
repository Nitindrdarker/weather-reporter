import NavBar from './components/NavBar';
import './App.css';
import WeatherItem from './components/WeatherItem';
import React, { Component } from 'react'
export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      light : 1
    }
  }
  toggleMode = ()=>{
    this.setState({light : this.state.light ^ 1})
    if (this.state.light === 1){
      document.body.style.backgroundColor = 'gray'
    }
    else{
      document.body.style.backgroundColor = 'white'
    }
  }
  
  render() {
    
    return (
      <>
    <NavBar light={this.state.light} toggleMode = {this.toggleMode}/>
    <div className='container'>
    <WeatherItem light={this.state.light} toggleMode = {this.toggleMode}/>
    </div>
    </>
    )
  }
}

export default App

