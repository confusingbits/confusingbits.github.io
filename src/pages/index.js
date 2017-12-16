import React from 'react'
import Link from 'gatsby-link'

import lightbulb from '../img/redbulb.jpg'

const background = {
  height: 'calc(100vh - 50px)',
  backgroundImage: `url(${lightbulb})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black'
}

const message = {
  margin: '0px',
  position: 'absolute',
  bottom: '15vh',
  left: '5vw',
}

const text = {
  color: '#B8351D',
}

const IndexPage = () => (
  <div style={background}>
    <div style={message}>
      <h1 style={text}>Hi, I'm Corey.</h1>
      <h1 style={text}>I solve problems.</h1>
    </div>
  </div>
)

export default IndexPage
