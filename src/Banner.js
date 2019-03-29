import React, { Component } from 'react'
import '../App.scss'

export default class Banner extends Component {
  render() {
    return (
      <div className='outerdiv'>
        <div className='hero'>
          <img className='hero__img' src='./assets/OLYMPIC-ICON.png'/>
          <h1 className='hero__text'>Olympic Winners.</h1>
          <div className='hero__whitething'></div>
        </div>
        <div className='slantthing'></div>
      </div>
    )
  }
}
