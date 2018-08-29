import React, { Component } from 'react'
import './ArtCard.css'

export default class ArtCard extends Component {
  render() {
    const { delay, data } = this.props
    return (
      <div className="artcard-container" style={{ animationDelay: delay + 's' }}>
        <div className="image">
          <img src={data.image} alt="" />
        </div>

        <div className="middle">
          View
        </div>
        <div className="desc">
          {data.title}
          <div className="subdesc">{data.subtitle}</div>
        </div>
      </div >
    )
  }
}
