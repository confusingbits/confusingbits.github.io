import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout";

const CV = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <header>
            <h4>
              M. Corey Thompson
              <br />
            </h4>
            <address>
              <br /> corey@confusingbits.com
              <br /> https://confusingbits.com
            </address>
          </header>

          <h4 className="page-header">Objective</h4>
          <p>
            I am seeking a full time, junior software development or engineering
            position. Preferably for a role where the primary responsibility is
            writing production software, websites and/or tooling. I am not
            particularly interested in a dedicated quality assurance, support,
            or sales position.
          </p>

          <h4 className="page-header">About</h4>
          <p>
            I love to solve stubborn problems. And I love optimization. Much of
            my technical experience has involved primarily concerns of
            efficiency with regards to workflow, usability, and process. It is
            an innate inclination for me and as a result I am fairly skilled and
            self motivated at this type of an analysis and resolution. I am not
            particularly skilled at aesthetic design. But I am able to
            collaborate easily for such tasks, as I get along well with a
            variety of temperments. I am comfortable with public speaking,
            teaching, and customer/community relations.
          </p>

          <p>
            <strong>I am endlessly, passionately, obsessively curious.</strong>{" "}
            I never stop learning.
          </p>

          <p>
            For leisure, I love to play and develop video games. In particular,
            I am something of a community leader in World of Warcraft and an
            addon developer for Kerbal Space Program. I am also involved in my
            local crossfit affiliate and I enjoy golf when I can. I read
            voraciously on the topics of computer science, sustainability,
            physics, and health.{" "}
          </p>

          <p>
            You will find included here a list of only relevant skills and
            experience, as I've held a variety of jobs. This is a curated list
            of skills and is not exhaustive. You will also find a selection of
            my more impactful projects, as well my publications and public
            presentations.
          </p>
          <p>Thank you for your consideration.</p>

          <h4 className="page-header">Skills</h4>
          <ul>
            <li>
              <h5>Languages </h5>
              <ul className="list-inline">
                <li>
                  <i className="fa fa-star" /> C#
                </li>
                <li>
                  <i className="fa fa-star" /> JavaScript
                </li>
                <li>
                  <i className="fa fa-star" /> HTML
                </li>
                <li>
                  <i className="fa fa-star" /> CSS
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> Python
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> SASS
                </li>
                <li>
                  <i className="fa fa-star-o" /> C++
                </li>
                <li>
                  <i className="fa fa-star-o" /> Fortran
                </li>
                <li>
                  <i className="fa fa-star-o" /> Node.js
                </li>
                <li>
                  <i className="fa fa-star-o" /> Typescript
                </li>
              </ul>
            </li>
            <li>
              <h5>Technologies</h5>
              <ul className="list-inline">
                <li>
                  <i className="fa fa-star" /> Git
                </li>
                <li>
                  <i className="fa fa-star" /> React
                </li>
                <li>
                  <i className="fa fa-star" /> Redux
                </li>
                <li>
                  <i className="fa fa-star" /> Flask
                </li>
                <li>
                  <i className="fa fa-star" /> Bootstrap
                </li>
                <li>
                  <i className="fa fa-star" /> Unity
                </li>
                <li>
                  <i className="fa fa-star" /> Visual Studio
                </li>
                <li>
                  <i className="fa fa-star" /> VS Code
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> jQuery
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> ASP.Net MVC
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> Webpack
                </li>
                <li>
                  <i className="fa fa-star-half-o" /> Babel
                </li>
                <li>
                  <i className="fa fa-star-o" /> Bash
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ pageBreakBefore: "always" }}>
        <div className="col-xs-12">
          <h4 className="page-header">Education</h4>
          <ul>
            <li>
              <h5>Software Engineering, Continuing Education</h5>
              <ul>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Design Patterns</li>
                <li>Test Driven Development</li>
                <li>Clean Code</li>
              </ul>
            </li>
            <li>
              <h5>Physics, University of Southern Mississippi</h5>
              <ul>
                <li>
                  All the standard Calculus including DE, PDE and Multi-Variable
                </li>
                <li>Linear Algebra, Discrete Math and Statistics</li>
                <li>
                  classNameical Mechanics, Special Relativity and Introductory
                  Quantum Mechanics
                </li>
                <li>General Chemistry and Introductory Electronics</li>
                <li>Introduction to Computer Science (C++) and Fortran</li>
              </ul>
            </li>
            <li>
              <h5>
                Small Computer Systems Specialist, Marine Corps
                Communication-Electronics School
              </h5>
              <ul>
                <li>TCP/IP networking</li>
                <li>Domains, Email and Messaging</li>
                <li>OSI Layer Model</li>
                <li>Routing</li>
                <li>Hardware and Software Configuration</li>
              </ul>
            </li>
          </ul>

          <h4 className="page-header">Experience</h4>
          <ul>
            <li>
              <h5>Independent Developer - Open Source</h5>
              <ul>
                <li>
                  <h5>
                    Developer for Shadowcraft, a character optimization web app
                    for World of Warcraft
                  </h5>
                  <ul>
                    <li>
                      Refactored code to make the engine compatible with the new
                      7.0 game version
                    </li>
                    <li>
                      Consulted on and implemented many geeky domain specific
                      details for the business logic
                    </li>
                    <li>Improved/fixed various APIs used by the front end</li>
                    <li>
                      Currently converting from Coffeescript/Rails to
                      React/Flask to simplify stack the stack for contributors
                    </li>
                    <li>http://shadowcraft.mmo-mumble.com/</li>
                  </ul>
                </li>
                <li>
                  <h5>
                    Created ForScience!, a science system addon for Kerbal Space
                    Program
                  </h5>
                  <ul>
                    <li>Automates some of the tedious bits of gameplay</li>
                    <li>40,000+ downloads on Curse.com</li>
                    <li>
                      Featured in PCGamer.com's "Best Kerbal Space Program Mods"
                    </li>
                    <li>Published 2014, currently in maintenance</li>
                    <li>https://github.com/confusingbits/ForScience</li>
                  </ul>
                </li>
                <li>
                  <h5>
                    Developed the addon Interstellar Lite, a part and gameplay
                    addon for Kerbal Space Program
                  </h5>
                  <ul>
                    <li>
                      Popular fork of an abandoned gameplay addon with new art
                      and gameplay mechanics
                    </li>
                    <li>
                      Refined some of the rough edges off of the original
                      Interstellar
                    </li>
                    <li>
                      Well received. My first published and profitable software
                      release
                    </li>
                    <li>Published 2014, now discontinued</li>
                    <li>https://github.com/confusingbits/KSPInterstellar</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ pageBreakBefore: "always" }}>
        <div className="col-xs-12">
          <h4 className="page-header">Experience Cont.</h4>
          <ul>
            <li>
              <h5>
                Physics Consultant / Laboratory Technician - Phillips-Stevenson
                Research Group, USM
              </h5>
              <ul>
                <li>
                  Concentrated and analyzed nanomaterial samples for quality
                  control
                </li>
                <li>
                  Developed a novel recycling systems to reduce waste and cost
                </li>
                <li>
                  Consulted on problems with the electric arc carbon
                  nanomaterial reactors
                </li>
                <li>
                  Trained students and employees on laboratory equipment and
                  safety
                </li>
                <li>Tested conductivity of nano-gold doped polymer films</li>
                <li>
                  Characterized UV absorption of paint samples for the US Air
                  Force
                </li>
                <li>
                  Reported results in peer reviewed publications and conferences
                </li>
              </ul>
            </li>
            <li>
              <h5>
                Operations Clerk / Network Administrator - United States Marine
                Corps
              </h5>
              <ul>
                <li>
                  Developed and maintained a database of personnel and equipment
                </li>
                <li>
                  Automated routine reports and forms to reduced administration
                  personnel requirements
                </li>
                <li>
                  Planned and coordinated logistical requirements for exercise
                  operations
                </li>
                <li>Managed the distance learning program for the company</li>
                <li>
                  Configured clients and servers in the field for secure
                  operations
                </li>
                <li>
                  Provided hardware and software support for field operations
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="page-header">Awards</h4>
          <ul>
            <li>
              Certificate of Naval Commendation, in 1998 during the humanitarian
              aid effort in East Timor, for the first field encrypted video
              conference over satellite, successful eradication of a virus
              attack on Australian forces and 98% uptime on a field deployed
              network.
            </li>
            <li>
              Nominated for outstanding undergraduate research by the USM
              physics department for work on metallic nitride fullerenes.
            </li>
          </ul>

          <h4 className="page-header">Publications</h4>
          <ul>
            <li>
              Conversion of Nanomaterial Waste Soot to Recycled Sc2O3 Feedstock
              for the Synthesis of Metallic Nitride Fullerenes
              <ul>
                <li>http://pubs.acs.org/doi/abs/10.1021/ie071250s</li>
              </ul>
            </li>
            <li>
              Chemically Adjusting Plasma Temperature, Energy, and Reactivity
              (CAPTEAR) Method Using NOx and Combustion for Selective Synthesis
              of Sc3N@C80 Metallic Nitride Fullerenes.
              <ul>
                <li>http://pubs.acs.org/doi/abs/10.1021/ja077305z</li>
              </ul>
            </li>
            <li>
              Effect of copper metal on the yield of Sc3N@C80 metallofullerenes
              <ul>
                <li>
                  http://pubs.rsc.org/En/content/articlelanding/2007/cc/b706859j
                </li>
              </ul>
            </li>
          </ul>

          <h4 className="page-header">Presentations</h4>
          <ul>
            <li>
              Production of Rare-Earth Metallic Nitride Fullerenes. Mississippi
              Academy of Science. Oxford, MS, 2007
            </li>
            <li>
              Reactor R&amp;D of Metallic Nitride Fullerenes. Electro-Chemical
              Society. Chicago, IL 2007
            </li>
          </ul>

          <footer>
            <h4 className="page-header" />
            <p>
              This document was written in HTML and formatted with Bootstrap. It
              is styled conditionally for printing or viewing.
            </p>
            <p>http://confusingbits.github.io/cv</p>
          </footer>
        </div>
      </div>
    </div>
  </Layout>
);

export default CV;
