import React, { Component } from 'react'
import './Works.css'
import ArtCard from './ArtCard'
import Cover1 from '../images/cct/cover.png'

import Cover2 from '../images/attendance/cover.png'

import Cover3 from '../images/cctold/cover.png'

import Cover4 from '../images/development/cover.png'

import Cover5 from '../images/graph/cover.png'

import Cover6 from '../images/homevisit/cover.png'

import Cover7 from '../images/location/cover.png'

import Cover8 from '../images/ooscapp/cover.png'

import Cover9 from '../images/ooscweb/cover.png'

import Cover10 from '../images/qattendance/cover.png'

import Cover11 from '../images/seniorproject/cover.png'

import Cover12 from '../images/thesis/cover.png'

import Cover13 from '../images/weightheight/cover.png'

const works = [
  {
    image: Cover1,
    title: 'CCT (React Native)',
    subtitle: 'GPS, Photo, Mongo, Online Offline, JWT, Sharing and Address'
  },
  {
    image: Cover2,
    title: 'Attendance (React Native)',
    subtitle: 'Mongo DB, Online-Offline mode and JWT Service'
  },
  {
    image: Cover3,
    title: 'CCT (Java)',
    subtitle: 'Old version of CCT App. Sqlite, image gallery and web service'
  },
  {
    image: Cover4,
    title: 'พัฒนาการเด็ก (Codova)',
    subtitle: 'Codova build to android, Restfull Service (C#), SQL Server and SQLite'
  },
  {
    image: Cover5,
    title: 'Social Graph (ReactJS and etc)',
    subtitle: 'ReactJS, Vuejs, Cayley, Sigma, d3js and Neo4j'
  },
  {
    image: Cover6,
    title: 'แบบเยี่ยมบ้าน (Codova)',
    subtitle: 'Android, Google Map, Take photo, Restfull Service (C#), SQL and SQLite'
  },
  {
    image: Cover7,
    title: 'พิกัดโรงเรียน (Java)',
    subtitle: 'Java Native, GPS, Restfull Service (C#), SQL Server and SQLite'
  },
  {
    image: Cover8,
    title: 'ThaiOOSC (React Native)',
    subtitle: 'Mongo DB, Online-Offline mode and JWT Service'
  },
  {
    image: Cover9,
    title: 'ThaiOOSC web (ReactJS)',
    subtitle: 'ReactJS, Mongo DB, JWT Service and Google Map'
  },
  {
    image: Cover10,
    title: 'Q-Attendance (React Native)',
    subtitle: 'Mongo DB, Online Offline, JWT, Restfull Service (C#) and SQL'
  },
  {
    image: Cover11,
    title: 'Senior Project (C#)',
    subtitle: 'asp.net web application, asp.net web services'
  },
  {
    image: Cover12,
    title: 'Thesis (Polymer)',
    subtitle: 'Polymer, Javascript, Nodejs, Restfull Service, Level DB, SQL and Mongo DB'
  },
  {
    image: Cover13,
    title: 'น้ำหนักส่วนสูง (Java)',
    subtitle: 'Java Native, Restfull Service (C#), SQL Server and SQLite'
  }
]

export default class Works extends Component {
  render() {
    return (
      <div className="works-container">
        {works.map((w, i) => (
          <ArtCard key={i} data={w} delay={i * 0.3} />
        ))}
      </div>
    )
  }
}
