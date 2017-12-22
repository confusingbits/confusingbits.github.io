import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Header = () => (
  <nav id="my-nav" className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <a className="navbar-brand" href="http://confusingbits.com/">confusingbits</a>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-left">
          <li><Link to="/blog">/blog</Link></li>
          <li><Link to="/about">/about</Link></li>
          <li><Link to="/projects">/projects</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a className="fa fa-facebook" href="https://www.facebook.com/m.corey.thompson" /></li>
          <li><a className="fa fa-twitter" href="https://twitter.com/confusingbits" /></li>
          <li><a className="fa fa-github" href="https://github.com/confusingbits" /></li>
          <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/confusingbits" /></li>
          <li><a className="fa fa-envelope" href="mailto:corey@confusingbits.com" /></li>
        </ul>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="M. Corey Thompson - Software Engineer, Scientist, Gamer"
      meta={[
        { name: 'description', content: 'M. Corey Thompson is a software engineer, physicist, chemist, gamer, and community leader.' },
        { name: 'author', content: 'M. Corey Thompson' },
        { name: 'keywords', content: 'HTML,CSS,JSON,Javascript,React,Redux,Immutable,Node,C#,Unity,Python,Flask,MongoDB,SQL,World of Warcraft,WoW,rogue,shadowcraft,theorycrafting,Kerbal Space Program,KSP' },
      ]}>
      {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" /> */}
      <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css" rel="stylesheet" integrity="sha384-L/tgI3wSsbb3f/nW9V6Yqlaw3Gj7mpE56LWrhew/c8MIhAYWZ/FNirA64AVkB5pI" crossOrigin="anonymous" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossOrigin="anonymous" />

    </Helmet>
    <Header />
    <div style={{ paddingTop: '50px' }}>
      {children()}
    </div>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
