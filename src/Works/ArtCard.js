import React, { Component } from 'react'
import Modal from 'react-modal'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './ArtCard.css'
Modal.setAppElement('#root')

export default class ArtCard extends Component {
  state = {
    isOpenModal: false
  }

  onViewClick = () => {
    this.openModal()
  }

  openModal = () => {
    this.setState({ isOpenModal: true });
  }

  closeModal = () => {
    this.setState({ isOpenModal: false });
  }

  importAll = (name) => {
    const r = require.context('../images/', true, /\.(png|jpe?g|svg)$/)
    const paths = r.keys().filter(r => r.indexOf('./' + name + '/') === 0).map(r)
    return paths.map(r => {
      return { original: r, thumbnail: r, originalClass: 'artcard-gallery-transparent' }
    })
  }

  render() {
    const { isOpenModal } = this.state
    const { delay, data } = this.props
    const customStyles = {
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 9999,
        margin: '0 auto'
      },
      content: {
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    }
    const images = this.importAll(data.name)
    return (
      <div className="artcard-container" style={{ animationDelay: delay + 's' }}>
        <div className="image">
          <img src={data.image} alt="" />
          <span className="year">{data.year}</span>
        </div>

        <div className="middle" onClick={this.onViewClick}>
          View
        </div>

        <div className="desc">
          {data.title}
          <div className="subdesc">{data.subtitle}</div>
        </div>

        <Modal
          isOpen={isOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <ImageGallery items={images} style={{ margin: '0 auto' }} />
          <div onClick={this.closeModal} className="artcard-close"></div>
        </Modal>
      </div>
    )
  }
}
