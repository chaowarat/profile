import React, { Component } from 'react'
import './Skills.css'

const skillsL = [
  { text: 'React Native', value: 90, year: 3 },
  { text: 'Objecttive-C, C, C++', value: 50, year: 2 },
  { text: 'VueJS, Python and Polymer', value: 30, year: 1 },
  { text: 'Javascript, HTML, CSS', value: 70, year: 4 },
]

const skillsR = [
  { text: 'ReactJS', value: 80, year: 3 },
  { text: 'MongoDB, Microsoft SQL, IndexDB and SQLite', value: 40, year: 2 },
  { text: 'NodeJS, Asp.net C#, Java,', value: 60, year: 2 },
]

export default class Profile extends Component {
  _valueToColor = (value) => {
    if (value >= 80) return '#87c05e'
    if (value >= 70) return '#3c70b4'
    if (value >= 60) return '#E65100'
    if (value >= 50) return '#f4bf00'
    if (value >= 40) return '#f26522'
    if (value >= 30) return '#ed1c24'
  }

  render() {
    return (
      <div className="skills-container">
        <h3>Experience Skill</h3>
        <div className="skills-bar-container">
          <div className="skills-column">
            {skillsL.map((sk, i) => (
              <div key={i} className="skills-row">
                <label>{sk.text}</label>
                <span className="rating-count pull-right">{sk.year} yrs</span>
                <div className="skills-progress">
                  <div className="skills-progress-bar"
                    style={{
                      backgroundColor: this._valueToColor(sk.value),
                      width: sk.value + '%',
                      animationDelay: (i * 1) + 's'
                    }}>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-column">
            {skillsR.map((sk, i) => (
              <div key={i} className="skills-row">
                <label>{sk.text}</label>
                <span className="rating-count pull-right">{sk.year} yrs</span>
                <div className="skills-progress">
                  <div className="skills-progress-bar"
                    style={{
                      backgroundColor: this._valueToColor(sk.value),
                      width: sk.value + '%',
                      animationDelay: (i * 1) + 's'
                    }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    )
  }
}
