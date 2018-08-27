import React, { Component } from 'react'
import Card from './Card'
import './Profile.css'
import star from '../star.svg'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <Card>
          Profile
        </Card>
        <ul className="profile-background-animated">
          <li><img src={star} alt="bck-img" /></li>
          <li><img src={star} alt="bck-img" /></li>
          <li><img src={star} alt="bck-img" /></li>
          <li><img src={star} alt="bck-img" /></li>
          <li><img src={star} alt="bck-img" /></li>
        </ul>
      </div >
    )
  }
}
