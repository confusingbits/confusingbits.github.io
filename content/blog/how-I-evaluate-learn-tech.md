---
title: How I Evaluate and Learn New Tech
description: Maybe you'll find this pattern useful as well.
date: 2020-11-29
---

Like many in the software industry, I'm always learning new technologies. Sometimes it is because I need to learn something to diagnose a problem and other times it is to get more efficient at some project that I'm current assigned. Those are a given, but I don't want to talk about those types of "aquired" knowledge gaps, but instead I want to talk about how to learn when given the option to learn anything.

There are so many interesting things to learn, and obviously no where near enough time to learn them all, so we must be judicious in what we decide to learn.

For me, I like to tend to evaluate things based on a combination of values that I prioritize. I want a successful career, and I don't want to be stuck working technology that I do not have any faith in for the future. I believe strongly that we need to improve our tools and quality standards in the industry.

Let me state some things that may already be obvious, but they need to be said nonetheless.

CPUs are not getting faster. Not in the traditional way we've leveraged them over the last half of the 20th century in which software first started taking over the world. They are getting more power efficient. They are getting more cores. They are getting faster memory access. But they are not really getting faster. This has largely been true my entire career in IT.

Around the time I first entered IT, the Pentium 4 came out, and topped out at 3.5 Ghz in the early 2000's. Which is about the same speed as a modern desktop processor now. The brand new Ryzen 5 desktop processors run at about 3.5Ghz, and boost to near 5Ghz. Nearly 20 years, and less than a doubling of event raw, peak clock rate. This is a FAR cry slower rate of progress that we've seen for most of computing history. This definitely not the whole story, as these modern cpus are using a lot more fancy tricks today to speed up calculations, but it is a major metric that has all but completely stalled.

The thing that has exploded is specialize processing units like GPUS, memory speeds (notably the move from HDDs to SSDS), and hardware and periphrial interface speeds. Also an explosion of system on chip designs and low power consumption designs. And most obiously, cores have exploded in number. Quad core is pretty much a minimum now for even a budget desktop, dual core can't really keep up with all of the processes running on modern OSs today.

The software industry has had is easy. We got to ride on decades of hardware advances to fund our more and more expensive software design choices. Now we are expanding our applications across multiple processes to try and keep the ponzi scheme afloat.

That's the major challenge that I believe will be essential to recognize and I am suiting my technologies choices to match.

### We need our tools to be more efficient and they are going to need to handle multiple cores and threads safely and easily. The industry standard languages are not adequate for this challenge.

Another challenge that I've identified is that most of the complexity I deal with day to day is mismatched modeling of domains. This occurs all over the place. Once you see it, you start seeing it everywhere. We allow our systems to model what should be impossible states and then try to enforce it through validation and contraints. What should be simple plumbing becomes interative nightmares and edge case handling. This is almost certainly an oversimplification, but to me, the root cause of of most of the complexity that I experience day to day is mismatched domain models leading to downstream complexity.

For instance, we allow a user to signup for an account, and there is a requirement that the user must validate thier email before we allow them to login. But we already created the user entry on the user table, and then depend on a flag that always needs to be checked to see if they are valid or not. What We should have done is created a registration model for a new unverified user, and then only create the user after the registration has been validated. Now every user is always a validated user.

It's having to call multiple endpoints to finalize some process that needs to be atomic. This is a transaction that is not expressed in the api which can and will result in orphaned resources when the full process isn't or can't be completed. So we run scripts to clean these up, and to try to enforce validation in our user interfaces to prevent this for occuring.

### We need our tools to allow for richer domain modeling to make these states impossible.

There will come a day when a major disaster occurs and it is going to be caused by bad software. [Knight Capitol](https://en.wikipedia.org/wiki/Knight_Capital_Group) was perhaps the most well known. More recently is the [Boeing 737 Max](https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings) which are trotted out as examples. As an industry, we need to be able to show that our tools and practices are sound to avoid regulation in the name of safety. If you follow [Uncle Bob](https://en.wikipedia.org/wiki/Robert_C._Martin) of Clean Code fame, you'll have heard this before, and I completely agree with him. In fact, much of this entire article is the result of much of his work. I'm not saying anything new here.

We need to be able to express the domain precisely, and most languages to do not allow for this expressivity at the type level.

### We need our tools and processes to be reliable by design.

With all of this as a given, here's this has been my strategy going forward.

0. **Meet the implicit assumptions.** Namely that any new tech needs to be somewhat marketable to possible future clients and employers.
1. **Focus on new technologies that emphasis native or near native execution speed.** And saying that your language can call C bindings doesn't count. Nearly every mainstream language can call C. Pythonistas are really bad about using this excuse for pythons attrociously slow runtime. Node calls C++ code all the time, and you don't see many people saying Node is as fast as C++.
2. **Focus on technologies that let me express domain logic and contraints as clearly and as exactly as possible.** I want technologies that will allow me to avoid bugs from being expressed at all.
3. **Focus on technologies that prioritize productive, provably correct, testable code.** Technologies that prioritizes correctness, friendliness, and simplicity over niche features, familiarity/convention, and legacy compatibility. Legacy is a reality, but we should be prioritizing safer solutions to migrate those things to, not handing out unsafe backdoors or compromising the best design principles.

To me, this means something more functional. Languages with mathematical underpinnings. Algebraic data types, automatic type systems that prevent bugs, and have minimal dependencies. Notice, I said more functional. I don't think that pure, lazy, staticly typed functional programming is going to save us all, but many of those things can lead to much better code that most of us write from day to day. And I think for most user application level code especially user facing design can and does benefit greatly from functional programming.

In keeping with that, for the last few years, I've been learning functional languages. I mean pure, staticly typed, functional languages with rich, automatic type inference. There are functional languages that allow mutability and are missing features like type inference, or allow dynamic types, or where they are in many ways just syntactic bandaids over other related runtimes (Scala, Kotlin, and to a much lesser extent F# and Clojure). Just requiring pure, static types eliminates a lot of the [options](https://en.wikipedia.org/wiki/Comparison_of_functional_programming_languages).

I've been building more with [Elm](https://elm-lang.org/), which is the safest and most expressive language that I've ever experienced. And while initialy unfamiliar, its easy to use. The bulk of my work is frontend web, so this is a more immediate investment. It is my goto solution for personal web projects now and toy experiments. Elm does something special. I'm fearless with Elm code. I can write with abandon, and Elm has my back. Often times I'm just writing blindly to satisfy the compiler, and when the compiler errors clear, everything works. It's truely delightful, and somewhat magical. It brings back joy to programming. I have never experienced this with any other language until I started using Elm.

To suppliment Elm, and learn the more advanced parts of functional programming (notably type classes and category theory) I've been learning Haskell using [The Haskell Book](https://haskellbook.com/). Haskell also creates native binaries that can often reach near C speeds, and allows for safe parallelization to utilize all of those cores we are being given today. I think in practice, it is more like C#/Java in speed although automatic compiler optimizations can take advantage of where hardware is going today and into the future. This is a more long term technology investment.

If some new native functional application technology is likely to come about, it will likely come from somewhere Haskell adjacent. Learning pure, types functional language using the reference, research implimention is worth it in any case. Just like knowing how to write some basic C code is useful.

And finally, I've decided to learn Rust next. It is an imperative systems langauge, but it has a safety first design and rich type system and you can work at a really high level much as you would in a managed language due to it's non-GC automatic memory management. It has something like algebraic types and it's traits are like type classes (read: compositional interfaces).

It seems to be getting all of the important things right with the design, and has built in options to add or depreciate features in the future with it's editions feature, so it can continue to innovate. I think most langauges should consider something like editions to sunset earlier design mistakes. (Javascript could be much better if they could/would revise the langauges earlier mistakes/shortcomings like == vs ===.) It also produces very fast native, non-GC, near zero runtime binaries. And it is thread safe. This is would be my longest term, most speculative investment. I have a lot to learn about native code. But I'm really excited about this one though. It seems to have a modern mix of functional and imperative design.

### Utilizing focused, ready made, tested solutions for 'solved' problems should be a major consideration for any new project or refactoring an older one

I'm also learning more 'off the shelf', self deployed platform technologies like [Hasura](https://hasura.io/) which makes it nearly impossible to design overly complicated apis and forces you to think about your modeling, and how to handle api side effects. Honorable mention is [Postgrest](http://postgrest.org/en/v7.0.0/). Notably, both are using Haskell as key technologies.

I'm currently looking for an off the shelf, self hosted identity management solution. If I never build another login/user system again, or deal with firebase or another cloud provider's solution I would be very happy. There seems to be some activity in the space like Keycloak, Hydra and Gluu, but I've yet to investigate this deeply just yet.

Both of these are imporant because I think tying yourself to a cloud provider is a major mistake. They make it easy to do so, because they want you locked in, but there will eventually be a winner in this space, and then the stagnation will begin, and you'll be at the mercy of your provider. IMO, you want all of your code running in platform independant containers and you want to own all of your data and major services. This also goes for things like contenful or shopify. Mail services where you interact through a standard smtp api are probably fine, but not like the aws mailer api, since you are adding aws code to your codebase. Sure, you can try to hide it behind a service interface, but it's like trying to hide your application from your DB. Even the repository pattern rarely makes you completely safe from particular db details for many non-trivial applications.

As for the data layer, I'm continually learning Postgres, because, well, you gotta choose a DB and this one is free, extensible, and proactively developed. In the future, I'd love to see more type level expressivity with DB designs, instead of relying on manually added contraints. Immutable DBs are also interesting as they can remove the need for deletion flagging/cleanup or audit tables/logging. I don't have a ton of expertise here, but haven't seen a whole lot of worthwhile innovation for the types of things I'm working on, so Postgres fits the bill for now. 

This one is a bit random, but I also keep my eye on .Net technologies. They are always doing something interesting, and the new .Net 5 / crossplatform focus is appealing. Still waiting to see thier verion of crossplatform UI framework with MVU, hopefully with F# support and native pre-compilation. Following .Net is useful to track where standard enterprise development is at as well.

What am I not learning? I'm not actively learning Vue or Svelte. They aren't doing anything significantly better than React, (I've already identified the React 'killer' and it's name is Elm) and some of these new frameworks backslide on many of the [lessons we learned](https://www.youtube.com/watch?v=x7cQ3mrcKaY) to get to React and Redux. I was notably disapointed with Blazor for this reason, although I understand why they kept the Razor/MVC style paradigm.

I'm also not actively learning another marginally different MVC/API framework. And I'm not actively learning another marginally different crossplatform UI framework. PWA, React Native or Electron, with all of those warts are generally good enough of the given available technologies. Don't get me wrong, I'll use whatever as needed, and take on the projects and problems as they present themselves, but if they aren't hitting one of those above three challenges in any significant way, then it like treading water to me. I'm not generally going to focus my free time on them. The major exception being that often exploring a new language will mean at least exploring some new UI or server library/framework.

### How do I actually go about learning new things?

I'll usually watch a talk introducing the technology. One of those "pitch meeting" demos that explains the technology and what it is solving. That "Rethinking Best Practices" video I linked above about React is a good example of one or the [Time Traveling Debugging](https://www.youtube.com/watch?v=xsSnOQynTHs) one about Redux.

Then I'll watch a few more indepth videos that demostrate how the technology solves some issue or the other more indepth. [Making Impossible States Impossible](https://www.youtube.com/watch?v=IcgmSRJHu_8) by Richard Feldman or [Building a Toolkit for Design](https://www.youtube.com/watch?v=Ie-gqwSHQr0&t) by Matthew Griffith are good examples of these types of talks that helped sell me on Elm.

For either of the steps above, I'm not usually going out of my way to watch these. I'm always watching conference talks on tech nearly every day. I strongly recommend that watching conference talks during breaks at work or over lunch is a great way to stay informed and help pique your curiosity about new technologies or techniques.

If I'm sufficiently interested, (it's hitting on several of the key strategic points outlined above) I'll go and make a demo projects following the tech's introductory documentation. I'll play with it for a few hours trying different things on an evening or over the weekend.

Then I'll try building one of my simpler backlog projects with the technology where it is suitable. Or reimpliment something from work or an earlier person project for a direct comparison. I'll usually sign up for any community slack/discord or subreddits at this time.

Somewhere around this point I'll start reading the official documentation or pick up a book that is highly recommended by that community on the topic. Usually this point is around the time I'm working on significant project with the technology.

I know some people like to learn just by jumping in blind and trying things out, and other people like to read all of the documenation or grab a book. But this is my process. I try to keep active time investment minimal early in the process.

Mostly, I think it is important to stay engaged, and also mindful about your intentions. Much like it is easy for new developers to get caught in a tutorial loop, I think it is easy for more experience developers to get caught up trying anything that others are talking about, which often is more marketing than anything.

Maybe Swift is not an amazing language. Maybe its a marginally improved native, proprietary language being proped up by Apple. Same with Kotlin, maybe it's not something truely innovative. Maybe most of the hype behind it is "not Java". The important question is: Do these technologies align with your career strategy? Maybe they do, maybe they don't, but either choice should be intentional.

So anyway, I hope this sparked some thoughts about your process and strategy. Feel free to [tell me what you think](https://twitter.com/confusingbits).
