---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "Avoiding the docker file watching issue on windows",
  "description": "The cause and solution to getting build tooling to work on save again with docker.",
  "image": "images/article-covers/success-kid.jpg",
  "published": "2020-11-22",
}
---

I want to talk about today is a strange issue I've run into with dev tooling not working when using WSL on windows and docker.

I did mention this issue before on my [Yesod docker dev container](/blog/yesod-docker-dev-container) post a while back. I referenced [this issue](https://github.com/docker/for-win/issues/5530) at the time.  I also noticed the issue when moving my personal site over to a docker container for development.

I ended up opening an issue on github specificly for the problem and [Stephen Turner](https://github.com/docker/for-win/issues/8276#issuecomment-688709919) graciously identified the cause and pointed me in the right direction with relevant documentation. Thank you again, Stephen :)

To summarize, you need to [host the code from the WSL filesystem](https://docs.docker.com/docker-for-windows/wsl/). Not a windows directory. The easiest way to get there is opening wsl and going to the home directory. Create the project the project or clone a repo to a folder inside the linux file system and the file watchers will actually work corectly so that change detection of the build tools can trigger rebuilds properly.

I like to then attach vscode to the container with the remote tools. This will start the container when needed, and any tooling you need like plugins and the dev cli's they rely on are available without having to install any to the native filesystem.

![Remote plugins only](/images/only-remote-plugins.png)

Notice the only plugins installed locally are the remote plugins. The Elm plugin and related tooling are installed to the container.

Happy coding!