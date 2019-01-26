import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import salty from '../img/salty.jpg'
import rocketman from '../img/rocketman.jpg'
import profile from '../img/profilepic.jpg'

const About = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <h4 className="page-header" />
        <div className="col-xs-12 col-sm-3 col-sm-push-4">
          <img
            src={profile}
            className="img-responsive img-rounded center-block"
          />
        </div>
      </div>
      <div className="row">
        <h4 className="page-header">About me</h4>
        <div className="col-xs-12 col-sm-3 col-sm-push-9">
          <img src={rocketman} className="img-responsive img-rounded" />
        </div>
        <div className="col-xs-12 col-sm-9 col-sm-pull-3">
          <p>
            Born, raised, and live in Mississippi. I love science, computers and
            technology in general. I am an unabashed nerd. As a child, I was
            often found dabbling with a chemistry set, performing experiments,
            or constructing a fort in the woods.
          </p>
          <p>
            I've dabbled with computers since a young age. My first computer was
            a Tandy 1000sx. I remember playing around with BASIC, copying and
            entering programs in by hand from books we had in the house. Or
            making text rpgs with friends in Turbo Pascal.
          </p>
          <p>
            I played the trumpet in the band in middle school and high school. I
            was also heavily involved in a frontier historical society called
            Frontier Camping Fellowship, as well as the Royal Rangers through my
            church.
          </p>
          <p>
            I am now heavily involved in gaming, in particular, I am community
            leader/influencer for the rogue className in World of Warcraft. I
            also help maintain a tool for the rogue community called
            Shadowcraft. I am also a mod developer for Kerbal Space Program.
          </p>
          <p>
            I have ongoing interests in a variety of topics like aerospace,
            sustainability, vernacular architecture, physics, nanotechnology,
            medicine, and nutrition.
          </p>
        </div>
      </div>
      <div className="row">
        <h4 className="page-header">About work</h4>
        <div className="col-xs-12 col-sm-3 col-sm-push-9">
          <img src={salty} className="img-responsive img-rounded" />
        </div>
        <div className="col-xs-12 col-sm-9 col-sm-pull-3">
          <p>
            Professionally, I've worked in network/computer administration in
            the Marine Corps while I was enlisted. I went on to study Physics at
            the University of Southern Mississippi, where I have contributed to
            published research on Metallic Nitride Fullerenes.
          </p>
          <p>
            I now practice software development. In particular I have worked on
            a variety of projects related to the games, World of Warcraft and
            Kerbal Space Program. I publish and contribute to open source
            projects mostly on GitHub. I also contract/consult privately and on
            Upwork.
          </p>

          <p>
            My <Link to="/resume">resume</Link> is available online.
          </p>
        </div>
      </div>
      <h4 className="page-header" />
      {/* <div className="row">
            <h4 className="page-header">About this site</h4>
            <div className="col-xs-12">
            <p>This is my personal playground and online resume. You'll also find my more notable public projects. I also
            use this site to experiment with web technologies.</p>
            </div>
          </div> */}
    </div>
  </Layout>
)

export default About
