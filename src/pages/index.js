import React from 'react'
import Link from 'gatsby-link'

import profilepic from '../img/profilepic.jpg'

const IndexPage = () => (
  <div className="container">
    <div>
      <div className="row">
        <h1 className="text-center page-header">Hi, I'm Corey.</h1>
      </div>
      <div className="row">
        <div className="hidden-xs col-sm-2"></div>
        {/* <div className="col-xs-3 col-sm-2"><a role="button" className="btn btn-block btn-default" href="https://www.facebook.com/m.corey.thompson"><span className="fa fa-facebook"></span><span className="hidden-sm hidden-xs"> Facebook</span></a></div> */}
        <div className="col-xs-3 col-sm-2"><a role="button" className="btn btn-block btn-default" href="https://twitter.com/wavefunctionp"><span className="fa fa-twitter"></span><span className="hidden-sm hidden-xs"> Twitter</span></a></div>
        <div className="col-xs-3 col-sm-2"><a role="button" className="btn btn-block btn-default" href="https://github.com/WaveFunctionP"><span className="fa fa-github"></span><span className="hidden-sm hidden-xs"> GitHub</span></a></div>
        <div className="col-xs-3 col-sm-2"><a role="button" className="btn btn-block btn-default" href="https://www.linkedin.com/in/wavefunctionp"><span className="fa fa-linkedin"></span><span className="hidden-sm hidden-xs"> Linkedin</span></a></div>
        <div className="col-xs-3 col-sm-2"><a role="button" className="btn btn-block btn-default" href="mailto:m.corey.thompson@gmail.com"><span className="fa fa-envelope"></span><span className="hidden-sm hidden-xs"> Email</span></a></div>
        <div className="hidden-xs col-sm-2"></div>
      </div>
    </div>
    <div id="about">
      <div className="row">
        <h3 className="page-header col-xs-12">A bit about me...</h3>
        <div className="col-xs-12 col-sm-6 col-sm-push-6">
          <img className="img-responsive img-rounded center-block" src={profilepic} />
        </div>
        <div className="col-xs-12 col-sm-6 col-sm-pull-6">
          <p>If you found this page, you've most likely been given my resume.</p>
          <p>Information is linked in the navbar above about me and my projects.</p>
          <p>For my most current resume, <a href="resume">go here...</a></p>
          {/* <p>For a more detailed version, <a href="cv">go here...</a></p> */}
          {/* <p>If you have questions, please <a href="mailto:m.corey.thompson@gmail.com">contact me...</a></p> */}
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
