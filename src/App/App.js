import React, { Component } from 'react'
import './App.css'
import Profile from '../Profile/Profile'
import Resume from '../Resume/Resume'
import Works from '../Works/Works'

const sectionHeight = 500

class App extends Component {
  state = {
    visibleSection: {}
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }

  handleOnScroll = () => {
    const wScroll = window.scrollY
    console.log(wScroll)
    let { visibleSection } = this.state
    if (wScroll > sectionHeight * 2 && !visibleSection['section3']) {
      visibleSection['section3'] = true
      this.setState({ visibleSection })
    } else if (wScroll > 100 && !visibleSection['section2']) {
      visibleSection['section2'] = true
      this.setState({ visibleSection })
    }
  }

  render() {
    const { visibleSection } = this.state
    return (
      <div className="app">
        <Profile />
        {!visibleSection.section2 ? <div className="app-empty" /> : <Resume />}
        {!visibleSection.section3 ? <div className="app-empty" /> : <Works />}
      </div>
    )
  }
}

export default App
