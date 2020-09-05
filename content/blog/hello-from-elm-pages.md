---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "Hello from `elm-pages`! 🚀",
  "description": "Moving from Gatsby to elm-pages!",
  "image": "images/article-covers/hello.jpg",
  "published": "2020-05-25",
}
---

In my apparently never ending quest for more complicated solutions, I've now decided to move my blog over to [elm-pages](https://github.com/dillonkearns/elm-pages).

It's a static site generator like gatsby, and it does the similar sorts of optimizations that gastby does. Only it is based on Elm. I have growing love affair with Elm, and since my day job already includes an enormous ammount of React work, I figured I'd use the site revamp and an excuse to migrate.

I originally move the site over to gatsby for similar reasons when I was first starting out with React. So this is an opportunity to utilize elm more and demo some of the things I'm doing with Elm, as well convince myself that Elm can handle the use cases I would need React for.

So what was wrong with Gatsby or React? Well, nothing wrong per se. Both are fine status quo solutions. I'm proud of the work I can do and have done with both of these solutions.

But I'm currently on a kick to evaluate tooling and technologies that will make my development easier and more robust. A big part of that is being unsatisfied with Javascript, particularly for larger projects. I've use Typescript and Flow, and linters and Redux and Immutablejs but those solutions are brittle and combersome.

Elm is part of that evaluation and thus far been extremely positive. It doesn't suffer from many of the issues I have with javascript and it's looking great so far, but before I go trumpting how amazing Elm is, and it is amazing, to stakeholders I need to know exactly what can or can not be done efficiently with the technology. As a bonus, the project uses elm-ui and it's already setup, so I don't need to fiddle with CSS. elm-ui really deserves it's own post, but you can check it out [here](https://elm-ui.netlify.app/). Be sure to watch the talk about it at [elm-conf](https://www.youtube.com/watch?v=Ie-gqwSHQr0).

So this is one small step. I'm loving working with Elm and the process of moving over has taken only a couple of hours. And honestly much of that time has been taken up by cleaning up the existing markdown files, and fighting with vim (I'm also learning vim, so yes, I hate myself right now).

We'll have to see how the deployment goes, but it looks fairly straitforward. If you are reading this sentence, it went reasonably smoothly and I didn't need to edit this closing statement. Wish me luck!