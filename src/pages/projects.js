import React from 'react'
import Link from 'gatsby-link'

import shc from '../img/shc.jpg'
import guildstatus from '../img/guildstatus.jpg'
import simple from '../img/SimpleScienceFix.jpg'
import science from '../img/ForScience.jpg'
import lite from '../img/InterstellarLite.jpg'

const Profile = () => (
    <div className="container">
        <div className="row">
            <h4 className="page-header">Shadowcraft Webapp Rewrite</h4>
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <img className="img-responsive img-rounded" src={shc} />
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <p>
                    A rewrite of the <a href="http://shadowcraft.mmo-mumble.com/us/hyjal/aeriwen/">Shadowcraft</a> webapp
                    from <a href="https://github.com/cheald/shadowcraft-ui">Rails/Coffeescript</a> to
                    <a href="https://github.com/ShadowCraft/shadowcraft-ui-react">React/Redux/Flask</a>. The website itself
                    is used by hundreds of thousands of users. Players use the website optimize their characters in the game,
                    World of Warcraft. When a game update comes out, there is usually a delay getting the new game information
                    encoded into the website to make the proper recommendations. A big limitation of this was a) having enough
                    contributors that are knowledgeable of technologies used in the project and b) the constant battle of
                    keeping the frontend in sync with the changing game and engine objects
                </p>
                <h4><small>Notable features:</small></h4>
                <p>
                    Much more maintainable code. The functional style paradigms of React/Redux ensures a more sane rendering of the very complex
                    business logic involved with the game. The engine itself, which is a separate project and handles the
                    core business logic now provides a configuration object that is simply rendered instead of having to
                    touch both the ui and engine every time there is a change, and ensures that communication between the
                    front end and backend apis/states are always in sync. In the process we've greatly simplified developer
                    and deployment experience, as well as knowledge requirements needed to work on the project by removing
                    dependencies on complicated technologies.
                </p>
                <h4><small>Technical challenges:</small></h4>
                <p>
                    Componetizing the views with react would have been simple enough, but the backend had to be completely written to remove the
                    dependency on Rails paradigms, and the Coffeescript was completely abandoned because a) it was a mess
                    and b) mixing manual dom manipulation with react can be problematic. Fortunately, we have had no set
                    deadline, which has allowed for a great deal flexibility.
                </p>
                <p>
                    Post-mortem: <Link to={'/shadowcraft-rewrite'}>ShadowCraft rewrite blog post</Link>
                </p>
                <p>
                    <small>Released: Jan. 2018</small>
                </p>
            </div>
        </div>
        <div className="row">
            <h4 className="page-header">Guild Status Page</h4>
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <img className="img-responsive img-rounded" src={guildstatus} />
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <p>
                    The page would monitor the status of my World of Warcraft guild, Regulators.
                    It was used by the guild leadership to identify gear issues within the raid membership.
                </p>
                <h4><small>Notable features:</small></h4>
                <p>Flags and highlights any gear issues present like missing enchants or gems on individual items according
                    to guild policy. The items are also formatted to display proper tooltips from Wowhead.com.</p>
                <h4><small>Technical challenges:</small></h4>
                <p>The backend is a script written in Node.js that retrieves json data from the Battle.Net API. That data is
                    then reduced and transformed into a static json file which is <a href="https://github.com/confusingbits/confusingbits.github.io">uploaded to GitHub</a>.
                    A simple script retrieves and parses the data into a table in DOM on page load. It is written in Typescript,
                    hosted with the rest of my personal site here on GitHub pages, utilizes WebComponents.js as an HTML imports
                    shim for templating and uses Bootstrap for basic formatting.</p>
                <p>
                    <small>Released: September 2016 (now retired)</small>
                </p>
            </div>
        </div>
        <div className="row">
            <h4 className="page-header">SimpleScienceFix</h4>
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <img className="img-responsive img-rounded" src={simple} />
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <p>
                    This is a small usability mod for Kerbal Space Program meant to address a minor annoyance with the way the game works. It
                    was <a href="https://github.com/confusingbits/SimpleScienceFix">written in C#</a>                    and uses the Unity Game Engine and Kerbal Space Program APIs. It has been fairly well received with over
                    <a href="http://www.curse.com/ksp-mods/kerbal/230239-simplesciencefix">1,000 downloads</a> since it's
                    release.
                </p>
                <h4><small>Notable features:</small></h4>
                <p>It does a thing and it works.</p>
                <h4><small>Technical challenges:</small></h4>
                <p>None really, as I had solved most of the issues with ForScience! previously. This is a very simple user experience
                    enhancement and I consider it feature complete. It is currently in maintenance.</p>
                <p>
                    <small>Released: May 2015</small>
                </p>
            </div>
        </div>
        <div className="row">
            <h4 className="page-header">ForScience!</h4>
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <img className="img-responsive img-rounded" src={science} />
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <p>
                    This is mod for Kerbal Space Program. It is designed to automate some of the more tedious elements of the game play experience.
                    It was <a href="https://github.com/confusingbits/ForScience">written in C#</a> and
                    uses the Unity Game Engine and Kerbal Space Program APIs.
                </p>
                <p>
                    This was my first mod that I wrote from scratch. It has been well received with over <a href="http://www.curse.com/ksp-mods/kerbal/220264-for-science">25,000 downloads</a>                    since it was released. It was also <a href="http://www.pcgamer.com/the-best-kerbal-space-program-mods-2/">featured on PC Gamer</a>                    as one of "best Kerbal Space Program mods" and has even been forked for expanded applications by other
                    authors.
                </p>
                <h4><small>Notable features:</small></h4>
                <p>The mod detects experiments and locations, performs the available experiments when appropriate, and collects
                    the data to the primary command pod. Having a scientist on board will make resetting run-once experiments
                    automatic. It has purposefully uncomplicated controls, just a simple toggle icon on the tool bar.</p>
                <p>It is supposed to work like magic, and it does.</p>
                <h4><small>Technical challenges:</small></h4>
                <p>Implementing the business logic was made fairly complicated due to the way the API is structured (and partial
                    documentation) as well as due to transient states in the game objects being observed. I have some possible
                    further plans, but I consider this project to be feature complete and in maintenance.</p>
                <p>
                    <small>Released: May 2014</small>
                </p>
            </div>

        </div>
        <div className="row">
            <h4 className="page-header">Interstellar Lite</h4>
            <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <img className="img-responsive img-rounded" src={lite} />
            </div>
            <div className="col-xs-12 col-sm-6 col-sm-pull-6">
                <p>
                    This is mod for Kerbal Space Program. It one of the larger types of mods that add new art and game mechanics. It is based
                    on a previous mod called Interstellar, which had been abandoned for some time. It was
                    <a href="https://github.com/confusingbits/KSPInterstellar">written in C#</a> and uses the Unity Game
                    Engine and Kerbal Space Program APIs.
                </p>
                <p>
                    This was my first mod for KSP and I used it to learn about Unity and C#, which started out as only some minor tweaks. After
                    the original author left, I made a major overhaul of all user interactions with the mod and opened it
                    up more user customization and allowing it to interoperate more easily with other mods. It was extremely
                    well received, and was actually the first time I'd made money with my software. As I had hoped it soon
                    saw many users share compatibility mods to allow it to work seamlessly with other mods for the game.
                </p>
                <p>
                    Some splits in mod ecosystem eventually made continued support untenable and so I made the decision to support the current
                    game version, but to retire the mod after the next major game version. Interstellar continues on in another
                    branch by another developer, including many of my ideas, as Interstellar Continued.
                </p>
                <h4><small>Notable features:</small></h4>
                <p>This was a huge mod so it would be impractical to list everything. I opened up the part module attributes,
                    which allowed players to share simple text file configurations which would allow the mod to work with
                    various constellations of mods. It was one of the founding mods for CommunityResourcePack, which helped
                    to create a more sane system of resources between different mods. There were many user interface and
                    usability fixes, everything from tooltips to part behaviors. There was a massive part re-balancing to
                    diversify part niches and expand vessel design to promote innovation and to better fit the part into
                    the scale of the game world. There was a lot of part pruning along with the introduction of size scaling
                    to lessen the memory footprint which was at the time limited to a 32 bit memory space. This gave users
                    more available memory to use other mods alongside Interstellar. And there were updates to the art and
                    code to support emissive textures and animations on radiators. And tons and tons of polish over the base
                    Interstellar.
                </p>
                <h4><small>Technical challenges:</small></h4>
                <p>This was my first time working with a substantial project, and the first time working on someone else code.
                    I had to learn the Unity/KSP APIs, which had sometimes spotty documentation. Along the way, I learned
                    to test my code throughly because it wasn't possible to run the game in debug. In the process I learned
                    how to use git, interact with users, process issues on GitHub, and publish and promote releases.</p>
                <p>
                    <small>Released: March 2014 (now retired)</small>
                </p>
            </div>

        </div>
    </div>
)

export default Profile
