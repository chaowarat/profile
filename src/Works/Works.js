import React, { Component } from 'react'
import './Works.css'
import ArtCard from './ArtCard'

const works = [
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 1',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 2',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 3',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 4',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 5',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 6',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 7',
    subtitle: 'description a little'
  },
  {
    image: 'http://beshley.com/vcard/images/works/work1.jpg',
    title: 'Title of works 8',
    subtitle: 'description a little'
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
