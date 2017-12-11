import React from 'react'
import Link from 'gatsby-link'

import profilepic from '../img/profilepic.jpg'

const Resume = () => (
    <div className="container">
        <div className="row">
            <header className="col-xs-4">
                <h4 className="page-header">M. Corey Thompson
                    <br />
                </h4>
                <address>
                    225 Arkwood Lane, Petal, MS 39465
                    <br /> 601-554-6900
                    <br /> m.corey.thompson@gmail.com
                    <br /> https://github.com/WaveFunctionP
                </address>
            </header>

            <div className="col-xs-8">
                <h4 className="page-header">Education</h4>
                <ul>
                    <li>
                        Physics, University of Southern Mississippi, 2005 - 2010
                    </li>
                    <ul>
                        <li>Nominated for outstanding undergraduate research</li>
                    </ul>
                    <li>
                        General Education, Pearl River Community College, 2004 - 2005
                    </li>
                    <li>
                        Small Computer Systems Specialist, Marine Corps Communication-Electronics School, 1999
                    </li>
                </ul>
            </div>

            <div className="col-xs-12">
                <h4 className="page-header">Skills</h4>
                <ul className="list-inline">
                    <li>
                        <i className="fa fa-star-o"></i> ASP.Net MVC</li>
                    <li>
                        <i className="fa fa-star-o"></i> Azure</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Babel</li>
                    <li>
                        <i className="fa fa-star-o"></i> Bash</li>
                    <li>
                        <i className="fa fa-star"></i> Bootstrap</li>
                    <li>
                        <i className="fa fa-star-o"></i> C++</li>
                    <li>
                        <i className="fa fa-star"></i> C#</li>
                    <li>
                        <i className="fa fa-star"></i> CSS</li>
                    <li>
                        <i className="fa fa-star-o"></i> Elm</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Flask</li>
                    <li>
                        <i className="fa fa-star-o"></i> FORTRAN</li>
                    <li>
                        <i className="fa fa-star"></i> Git</li>
                    <li>
                        <i className="fa fa-star"></i> HTML</li>
                    <li>
                        <i className="fa fa-star"></i> JavaScript</li>
                    <li>
                        <i className="fa fa-star"></i> Jest</li>
                    <li>
                        <i className="fa fa-star-o"></i> jQuery</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> MongoDB</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Node.js</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Python</li>
                    <li>
                        <i className="fa fa-star"></i> React</li>
                    <li>
                        <i className="fa fa-star"></i> Redux</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> SASS</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> SQL (T-SQL)</li>
                    <li>
                        <i className="fa fa-star-o"></i> Typescript</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Unity</li>
                    <li>
                        <i className="fa fa-star"></i> Visual Studio</li>
                    <li>
                        <i className="fa fa-star"></i> VS Code</li>
                    <li>
                        <i className="fa fa-star-half-o"></i> Webpack</li>
                </ul>
            </div>

            <div className="col-xs-12">
                <h4 className="page-header">Experience (technical)</h4>
                <ul>
                    <li>
                        React Developer (Contract), Crowdbotics, 2017 - Present
                        <ul>
                            <li>Development of a music sharing platform startup</li>
                        </ul>
                    </li>
                    <li>
                        Frontend Software Engineer (Contract), SalonFrontDesk, 2017
                        <ul>
                            <li>Wrote React Components for the Login System for SalonFrontDesk, a booking software startup</li>
                        </ul>
                    </li>
                    <li>
                        (Core Contributor), ShadowCraft, 2016 - Present
                        <ul>
                            <li>Demo: http://shadowcraft.mmo-mumble.com/us/hyjal/aeriwen/</li>
                            <li>Javascript, Python, React, Redux, Immutable, Flask, MongoDB, SASS, Webpack, Jest, and Battle.Net
                            </li>
                            <li>~20,000 lines of code. Hundreds of thousands of users</li>
                            <li>Co-architech of the frontend rewrite from Rails to React/Flask</li>
                            <li>Repo: https://github.com/shadowcraft/shadowcraft-ui-react</li>
                        </ul>

                    </li>
                    <li>
                        (Technical Consultant), Crossfit Petal, 2015 - 2016
                        <ul>
                            <li>Maintained website (Wordpress) and network infrastructure</li>
                        </ul>
                    </li>
                    <li>
                        Laboratory Technician, University of Southern Mississippi, 2006 - 2008
                        <ul>
                            <li>Published research in three peer reviewed papers relating to metalic nitride fullerene nanotechnology</li>
                            <li>Presented research on MNF production and optimization at local and national conferences</li>
                            <li>Optimized production, extraction, and purification processes of MNF products from micrograms per year to grams per week</li>
                            <li>Characterized UV absorbtion spectra of specialty coatings for the US Air Force</li>
                            <li>Analysed conductivity of nano-gold-doped polymer films</li>
                        </ul>
                    </li>
                    <li>
                        Small Computer Systems Specialist, United States Marine Corps, 1998 - 2002
                        <ul>
                            <li>Awarded a Certificate of Naval Commendation, in 1999 during the Australian-lead humanitarian
                                aid effort in East Timor, for "the first field encrypted video conference over satellite...
                                and 98% uptime on a field deployed network"
                            </li>
                            <li>Awarded a Humanitarian Service Medal for peackeeping efforts in East Timor as part of the small
                                team that were the first american troops in East Timor, charged with building IT infrastructure
                                for INTERFET in support of Operation Stabilize
                            </li>
                            <li>Developed the first automated administration and logistics reports for my company's and battalion's
                                offices
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="col-xs-12">
                <h4 className="page-header">Personal Projects</h4>
                <ul>
                    <li>
                        wavefunctionp.github.io - Personal Website and Portfolio, 2016 - Present
                        <ul>
                            <li>Demo: https://wavefunctionp.github.io/ </li>
                            <li>Typescript, Node, Bootstrap, jQuery, HTML, and CSS</li>
                            <li>Repo: https://github.com/wavefunctionp/wavefunctionp.github.io</li>
                        </ul>
                    </li>
                    <li>
                        ForScience! - A Science Automation Addon for Kerbal Space Program, 2014 - Present
                        <ul>
                            <li>Demo: https://www.youtube.com/watch?v=qPQlYaM57xI</li>
                            <li>Tens of thousands of downloads, using C#, KSP and Unity Game APIs</li>
                            <li>Repo: https://github.com/wavefunctionp/forscience</li>
                        </ul>
                    </li>
                    <li>
                        SimpleScienceFix - A Gameplay Enhancement for Kerbal Space Program, 2015 - 2016
                        <ul>
                            <li>Thousands of downloads. Written with C#, KSP and Unity APIs</li>
                            <li>Repo: https://github.com/wavefunctionp/SimpleScienceFix</li>
                        </ul>
                    </li>
                    <li>
                        Interstellar Lite - A Part and Gameplay Addon for Kerbal Space Program, 2014 - 2015
                        <ul>
                            <li>Written with C#, KSP and Unity APIs</li>
                            <li>Repo: https://github.com/wavefunctionp/KSPInterstellar</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Resume
