import React, { Component } from 'react'
import './Works.css'
import ArtCard from './ArtCard'
import CoverCCT from '../images/cct/cover.png'

import CoverGraph from '../images/graph/cover.png'

import CoverOOSCApp from '../images/ooscapp/cover.png'

import CoverOOSCWeb from '../images/ooscweb/cover.png'

import CoverQAttendance from '../images/qattendance/cover.png'

import CoverAttendance from '../images/attendance/cover.png'

import CoverCCTOld from '../images/cctold/cover.png'

import CoverDevelopment from '../images/development/cover.png'

import CoverHomevisit from '../images/homevisit/cover.png'

import CoverLocation from '../images/location/cover.png'

import CoverThesis from '../images/thesis/cover.png'

import CoverWeightHeight from '../images/weightheight/cover.png'

import CoverSeniorProject from '../images/seniorproject/cover.png'

import CoverPM from '../images/projectmanagement/cover.png'

const works = [
  {
    image: CoverCCT,
    year: '2018',
    title: 'CCT (React Native)',
    subtitle: 'GPS, Photo, Mongo, Online Offline, JWT, Sharing and Address'
  },
  {
    image: CoverGraph,
    year: '2018',
    title: 'Social Graph (ReactJS and etc)',
    subtitle: 'ReactJS, Vuejs, Cayley, Sigma, d3js and Neo4j'
  },
  {
    image: CoverPM,
    year: '2018',
    title: 'ระบบบริหารจัดการโครงการ (ReactJS)',
    subtitle: 'ReactJS, Redux, Mongo DB and JWT'
  },
  {
    image: CoverOOSCApp,
    year: '2017',
    title: 'ThaiOOSC (React Native)',
    subtitle: 'Mongo DB, Online-Offline mode and JWT Service'
  },
  {
    image: CoverOOSCWeb,
    year: '2017',
    title: 'ThaiOOSC web (ReactJS)',
    subtitle: 'ReactJS, Mongo DB, JWT Service and Google Map'
  },
  {
    image: CoverQAttendance,
    year: '2017',
    title: 'Q-Attendance (React Native)',
    subtitle: 'Mongo DB, Online Offline, JWT, Restfull Service (C#) and SQL'
  },
  {
    image: CoverAttendance,
    year: '2016',
    title: 'Attendance (React Native)',
    subtitle: 'Mongo DB, Online-Offline mode and JWT Service'
  },
  {
    image: CoverCCTOld,
    year: '2016',
    title: 'CCT (Java)',
    subtitle: 'Old version of CCT App. Sqlite, image gallery and web service'
  },
  {
    image: CoverDevelopment,
    year: '2016',
    title: 'พัฒนาการเด็ก (Codova)',
    subtitle: 'Codova build to android, Restfull Service (C#), SQL Server and SQLite'
  },
  {
    image: CoverHomevisit,
    year: '2016',
    title: 'แบบเยี่ยมบ้าน (Codova)',
    subtitle: 'Android, Google Map, Take photo, Restfull Service (C#), SQL and SQLite'
  },
  {
    image: CoverLocation,
    year: '2016',
    title: 'พิกัดโรงเรียน (Java)',
    subtitle: 'Java Native, GPS, Restfull Service (C#), SQL Server and SQLite'
  },
  {
    image: CoverThesis,
    year: '2016',
    title: 'Thesis (Polymer)',
    subtitle: 'Polymer, Javascript, Nodejs, Restfull Service, Level DB, SQL and Mongo DB'
  },
  {
    image: CoverWeightHeight,
    year: '2016',
    title: 'น้ำหนักส่วนสูง (Java)',
    subtitle: 'Java Native, Restfull Service (C#), SQL Server and SQLite'
  },
  {
    image: CoverSeniorProject,
    year: '2013',
    title: 'Senior Project (C#)',
    subtitle: 'asp.net web application, asp.net web services'
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
