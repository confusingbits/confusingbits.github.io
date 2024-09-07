---
title: Avoiding the docker file watching issue on windows
description: The cause and solution to getting build tooling to work on save again with docker.
date: 2020-11-22
---

I want to talk about today about a strange issue I've run into with dev tooling not working when using WSL on windows and docker.

I have mentioned this issue before on my [Yesod docker dev container](/blog/yesod-docker-dev-container) post a while back. In that article, I referenced [this issue](https://github.com/docker/for-win/issues/5530) at the time. Later, I also noticed the issue when moving my personal site over to a docker container for development.

I ended up opening an issue on github specificly for the problem and [Stephen Turner](https://github.com/docker/for-win/issues/8276#issuecomment-688709919) graciously identified the cause and pointed me in the right direction with relevant documentation. Thank you again, Stephen :)

###To summarize, you need to [host the code from the WSL filesystem](https://docs.docker.com/docker-for-windows/wsl/). Not a Windows directory.

The easiest way to get there is opening wsl and going to the home directory. Create the project or clone a repo to a folder inside there inside the linux file system and the file watchers will actually work correctly so that change detection of the build tools can trigger rebuilds properly.

I'm not sure if this limitation is specific to WSL2 or not, but I was/am running WSL2, and docker is using WSL2, in my case. If you haven't [upgraded to WSL2](https://docs.microsoft.com/en-us/windows/wsl/compare-versions), you should do so, as it has some major improvements to performance and compatibility.

For development, I like to then attach vscode to the container with the remote tools. This will start the container when needed, and any tooling you need like plugins and the dev cli's they rely on are available without having to install any to the native filesystem.

![Remote plugins only](/images/only-remote-plugins.png)

Notice the only plugins that I needed to install locally are the remote plugins. The Elm plugin and related tooling are installed to the container. I have a similar setup for a NexyJS project, and as you can see, there are no JS related plugins installed unless I
m working on that project's container.

Happy coding!

Feel free to [tweet me](https://twitter.com/confusingbits).
