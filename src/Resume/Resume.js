import React, { Component } from 'react'
import './Resume.css'

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-column">
          Experience
          <ul>
            <li>ART DIRECTOR (1990)</li>
            <li><span>facebook Inc.</span></li>
            <li>Designer (1992)</li>
            <li><span>facebook Inc.</span></li>
            <li>exp 1</li>
            <li>exp 1</li>
            <li>exp 1</li>
          </ul>
        </div>
        <div className="resume-column">
          Education
          <ul>
            <li>(2014) Master of Computer Engineering at Naresuan University</li>
            <li>
              <span>Enterprise Information Systems and Special Topics in Computer Engineering and Applied Computing</span>
            </li>

            <li>(2013) Master of Computer Engineering at Naresuan University </li>
            <li>
              <span>Mathematics for Graduate Studies in Computer Engineering,
              Advanced Computer Architectures and Organizations,
              Advanced Digital Image Processing,
              Data Integration,
              Advanced Algorithm Analysis and Design,
              Software Engineering Design and Management and Research Methodology in Science and Technology
              </span>
            </li>

            <li>(2012) Bachelor of Computer Engineering at Naresuan University</li>
            <li>
              <span>Computer Languages,
              Algorithm Analysis and Design,
              Principle of Artificial Intelligence,
              Principle of Software Engineering,
              Java Programming,
              Parallel System and Special Topic in Computer Systems
              </span>
            </li>

            <li>(2011) Bachelor of Computer Engineering at Naresuan University</li>
            <li>
              <span>Discrete Mathematics for Computer Engineering,
              Computer and Data Communications,
              Microcontroller and Microcomputer Interfacing,
              Computer Architecture and Organization,
              Control Systems for Computer Engineering,
              Principle of Computer Networks,
              Fundamental of Database Systems,
              Compiler Construction and Operating Systems
              </span>
            </li>

            <li>(2010) Bachelor of Computer Engineering at Naresuan University</li>
            <li>
              <span>Fundamental of Data Structures and Algorithms,
                Digital Circuit and Logic Design II, Electronics for Computer Engineering,
                Advanced Computer Programming and Microprocessor and Assembly Language
                </span>
            </li>

            <li>(2009) Bachelor of Computer Engineering at Naresuan University</li>
            <li>
              <span>Digital Circuit and Logic Design I and Computer Programming</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
