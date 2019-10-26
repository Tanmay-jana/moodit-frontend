import React, { Component } from 'react'
import './App'
import LandingPage from './Components/LandingPage/LandingPage'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'
import Section5 from './Components/Section5/Section5'
import MainFooter from './Components/MainFooter/MainFooter'

export default class App extends Component {
  render() {
    return (
      <div className = "App">
        <LandingPage/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <MainFooter/>
      </div>
    )
  }
}
