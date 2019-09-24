import React, { Component } from 'react'
import './Card.css'
import CountUp from 'react-countup'
import background from '../images/background.jpg'
import avatar from '../images/avatar.jpg'

export default class Card extends Component {
  render() {
    const bg = { backgroundImage: "url(" + background + ")" }
    return (
      <div className="card-container" >
        <div className="card-body" >
          <div className="card-background" style={bg} />
          <div className="card-column avatar">
            <div className="card-avatar">
              <img className="image" src={avatar} alt="avatar" />
            </div>
            <div className="title">
              Chaowarat Tangrueng
            </div>
            <div className="subtitle">
              Developer
            </div>
          </div>
          <div className="card-column detail">
            <ul className="achievement">
              <li>
                <span style={{ color: '#87c05e' }}>
                  <CountUp end={19} duration={4} />
                </span>
                <h4>projects</h4>
              </li>
              <li>
                <span style={{ color: '#E65100' }}>
                  <CountUp end={5} duration={5} />
                </span>
                <h4>year’s experience</h4>
              </li>
              <li>
                <span style={{ color: '#3c70b4' }}>
                  <CountUp end={18} duration={3} />
                </span>
                <h4>skills</h4>
              </li>
            </ul>
            <ul className="contact">
              <li>Nick Name: Bin</li>
              <li>Email: Chaowaratt@gmail.com</li>
              <li>Date of Birth: June 23, 1990</li>
              <li>Address: 5 M.4, Lankrabue, Kamphaeng Phet, 62170</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
