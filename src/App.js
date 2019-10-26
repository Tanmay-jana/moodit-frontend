import React, { Component } from 'react'
import './App'
import LandingPage from './Components/LandingPage/LandingPage'
import Section1 from './Components/Section1/Section1'

export default class App extends Component {
  render() {
    return (
      <div className = "App">
        <LandingPage/>
        <Section1/>
      </div>
    )
  }
}
