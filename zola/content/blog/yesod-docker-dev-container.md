---
title: Yesod Dev Container using Docker (on Windows)
description: How to setup a docker container for Yesod/Haskell development on Windows
date: 2020-08-29
---

So I've been learning Haskell and I believe I've learned enough syntax to begin working with more non-trivial applications, and since javascript/web applications are my primary domain, a web framework makes sense.

Throwing a bit of a monkey wrench into this process, I've run into difficulty running a few haskell projects on windows. Plus I don't want to clutter up my personal machine with a bunch of dev tooling. Using docker is a great way to isolate your dev environment, not just deployments.

You probably want code, so here it is. I won't ramble until afterwards.

``` Dockerfiledocker 
# Dockerfile

FROM fpco/stack-build

WORKDIR /yesod-test/
COPY . .

RUN stack setup
RUN stack install yesod-bin --install-ghc
RUN stack build

EXPOSE 3030
```

Using the `haskell` docker image as the base image wouldn't compile due to some error with blaze-html or something, which I didn't bother to investigate. (There was basicly no other information in the error output but the name.) The `fpco/stack-build` image is apparently has all dependencies needed to build packages on stackage, which is exactly the source of our deps, so this is close to ideal, at least for development.

This uses the fpco stack image, sets the current directory to the folder where we will mount all of the files for the project (yesod-test). From there it is standard yesdo commands.

The port exposed must be the same as the one set in the `command` in docker compose. The yesod dev process ignores any of the project config vars, you need to set the port using the cli flag, as far as I know.

``` yml
# docker-compose.yml

web:
    build: .
    command: stack exec -- yesod devel --port 3030
    stdin_open: true
    ports:
        - '3030:3030'
    volumes:
        - .:/yesod-test
        - /yesod-test/.stack-work
        - /yesod-test/yesod-devel
```

I'm still learning docker as well, which means I still constantly run into issues with it, and quite often the images or configs that I find are out of date. I was able to get a dev container to compile with this process. The volumes also mount the project files inside the container so that the file watchers can detect changes and recompile the project and automatically refresh the page like any sane modern development workflow.

Caveat, that there appears to be [some issue with file watching](https://github.com/docker/for-win/issues/5530) with Docker for Windows. The docker devs seem to think it is resolved, but it is not. I was able to work around it on a Nextjs project with a webpack polling hack, but that specific solution isn't applicable here but I assume something similar could be done. Until this issue is resolved with Docker, the experience will be less than ideal on Windows.

Note the matching port numbers. All the volumes are build artifacts we want to persist or project files `stdin_open: true` is needed for some [arcane reason](https://github.com/commercialhaskell/stack/issues/5062)

It is frustrating to run into so many issue on Windows with Haskell when going beyond trivial exercises with GHCI. I've thoroughly enjoy learning so far with [The Haskell Book](https://haskellbook.com/) but moving beyond exercise has been a trial of patience so far. I didn't have much luck with [Miso](https://haskell-miso.org/) (ran into issues with GHCJS, undocumented nix dependencies) or [gi-gtx-declarative](https://owickstrom.github.io/gi-gtk-declarative/) (couldn't get everything installed without errors) despite being very excited about those projects.

I'm sure much of this is my inexperience, but I hope someone at least found the docker configs helpful. Feel free to [tweet me](https://twitter.com/confusingbits) about how I'm wrong. (No really, I love discussions.)
