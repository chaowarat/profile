import React, { Component } from 'react'
import './Resume.css'

const experiences = [
  {
    title: 'Software Developer & Research Assistance (2018 - Present)',
    location: 'Inforvation Company Limited.'
  },
  {
    title: 'Software Developer & Research Assistance (2017)',
    description: 'โครงการพัฒนาระบบสารสนเทศเพื่อหลักประกันโอกาสทางการเรียนรู้ระยะที่ 2 งบประมาณ สำนักงานการศึกษาขั้นพื้นฐาน',
    location: 'Inforvation Company Limited.'
  },
  {
    title: 'Software Developer & Research Assistance (2016)',
    description: 'โครงการพัฒนาระบบสารสนเทศเพื่อหลักประกันโอกาสทางการเรียนรู้ งบประมาณ สำนักงานการศึกษาขั้นพื้นฐานโครงการระบบสารสนเทศเพื่อการบริหารจัดการสถานศึกษา งบประมาณ สำนักงานส่งเสริมสังคมแห่งการเรียนรู้และพัฒนาคุณภาพเยาวชน',
    location: 'Inforvation Company Limited.'
  },
  {
    title: 'Research Assistance (2014 - 2015)',
    description: 'โครงการพัฒนาระบบฐานข้อมูลสารสนเทศเพื่อการจัดการศึกษาอย่างมีคุณภาพและ โครงการพัฒนาระบบฐานข้อมูลสารสนเทศเพื่อการสร้างหลักประกันโอกาสการเรียนรู้เชิงพื้นที่ งบประมาณ สำนักงานส่งเสริมสังคมแห่งการเรียนรู้คุณภาพเยาวชน โครงการพัฒนาระบบฐานข้อมูลสารสนเทศเพื่อการดูแลระยะยาวสำหรับผู้สูงอายุที่มีภาวะพึ่งพิงระยะที่ 2 งบประมาณ สำนักงานหลักประกันสุขภาพแห่งชาติ'
  },
  {
    title: 'Research Assistance (2013)',
    description: 'Software Developer โครงการการพัฒนาฐานข้อมูลสารสนเทศเพื่อการดูแลเด็กด้อยโอกาสนอกระบบและเด็กกลุ่มเสี่ยงในระบบการศึกษางบประมาณ สำนักงานส่งเสริมสังคมแห่งการเรียนรู้และพัฒนาคุณภาพเยาวชน'
  }
]

const educations = [
  {
    title: '(2014) Master of Computer Engineering at Naresuan University',
    description: 'Enterprise Information Systems and Special Topics in Computer Engineering and Applied Computing'
  },
  {
    title: '(2013) Master of Computer Engineering at Naresuan University',
    description: 'Mathematics for Graduate Studies in Computer Engineering, Advanced Computer Architectures and Organizations, Advanced Digital Image Processing, Data Integration, Advanced Algorithm Analysis and Design, Software Engineering Design and Management and Research Methodology in Science and Technology'
  },
  {
    title: '(2012) Bachelor of Computer Engineering at Naresuan University',
    description: 'Computer Languages, Algorithm Analysis and Design, Principle of Artificial Intelligence, Principle of Software Engineering, Java Programming, Parallel System and Special Topic in Computer Systems'
  },
  {
    title: '(2011) Bachelor of Computer Engineering at Naresuan University',
    description: 'Discrete Mathematics for Computer Engineering, Computer and Data Communications, Microcontroller and Microcomputer Interfacing, Computer Architecture and Organization, Control Systems for Computer Engineering, Principle of Computer Networks, Fundamental of Database Systems, Compiler Construction and Operating Systems'
  },
  {
    title: '(2010) Bachelor of Computer Engineering at Naresuan University',
    description: 'Fundamental of Data Structures and Algorithms, Digital Circuit and Logic Design II, Electronics for Computer Engineering, Advanced Computer Programming and Microprocessor and Assembly Language'
  },
  {
    title: '(2009) Bachelor of Computer Engineering at Naresuan University',
    description: 'Digital Circuit and Logic Design I and Computer Programming'
  }
]

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-column">
          Experience
          <ul>
            {experiences.map((ex, i) => [
              <li key={i}>{ex.title}</li>,
              <li key={i + 'de'}>
                <span>{ex.description}</span>
                {ex.location && <div>{ex.location}</div>}
              </li>
            ])}
          </ul>
        </div>
        <div className="resume-column">
          Education
          <ul>
            {educations.map((ex, i) => [
              <li key={i}>{ex.title}</li>,
              <li key={i + 'de'}>
                <span>{ex.description}</span>
              </li>
            ])}
          </ul>
        </div>
      </div>
    )
  }
}
