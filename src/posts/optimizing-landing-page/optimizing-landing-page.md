---
title: Optimizing the Landing Page
date: 2017-12-22
path: /optimizing-landing-page
---

So now that the website has been converted over the Gatsby. I have been looking into performance.

One of the neat things about Gatsby is that it will render your app out staticly and then load the rest of your app after the initial render. There is this interesting optimization you can use with your internal links to benefit from client side routing with Gatsby. I had seen it mentioned in the docs for Gastby, but it didn't click with me at the time. However, I came across a post by [Scott Nonnenberg](https://blog.scottnonnenberg.com/practical-gatsby-js/) who mentioned that one can avoid a full refresh of the page by utilizing the Link component provided by Gatsby, as opposed to the regular html anchor tags which I had been using. And finally my nagging question was answered as to why my site didn't feel as snappy as the default starter. Swapping those a tags to Links made a huge difference because now each route uses cached resources lazyloaded by Gastby. Awesome Sauce!

With that handled I put my efforts on optimizing loading speed for the initial render. I knew that most people would be hitting my landing page first so I might as well start there. I first headed off to [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), which is a tool offered by Google to analyze page performance. There are many other similar tools, but this one was pretty straitforward, and since I have no preference so I just went with it.

![A sample report from google after a little optimization](initial-report.png)

One of the messages was that the lightbulb 'hero image' on the landing page which I had been using was 4.3MB. which is obviously a lot to be loading on the inital render. And a general first approximation for improving perforamce is simply doing less work. And downloading a smaller file definitely is less work. I played with it a bit, but Google kept wanting a smaller image. And I'll admit I was afraid of ending up with a very weak image with high compression. I put the image through gimp and set the output to 80% quality and reducing the resolution to 1920x1080. Turns out it looks fine even at 1080 on my monitor. I ended up at 109kb, which is pretty good IMO.

The blocking resources will have to wait for now, until I can get rid of the dependancy on Bootstrap. And I'm honestly not too worried about the caching thing. I plan on uploading every week, and it is currently at ten days. I don't expect there will be that many repeat visitors anyway. Let's be honest. I basicly talking to the void here. :P



