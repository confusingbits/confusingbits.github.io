const fs = require("fs");
const path = require("path");
const key = process.env.GOOGLE_API_KEY;
const channelId = "UC2od81AMlgwctg2hCfVSe_A";
const dir = "../content/blog";
const { spawnSync } = require("child_process");

const handle = async (dir, fs, path) => {
  // use git to find the last updated blog post, we can then only fetch videos after that date
  const proc = spawnSync("git", [
    "log",
    "-1",
    "--format=%ct",
    "../content/blog/",
  ]);
  const lastTs = proc.stdout.toString();
  const lastDate = new Date(lastTs * 1000);

  let items = [];
  let nextPageToken = ""; // need to handle pagination since it is possible to have more than 50 videos
  while (nextPageToken !== undefined) {
    // https://developers.google.com/youtube/v3/docs/search
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?&key=${key}&order=date&channelId=${channelId}&part=snippet&maxResults=50&publishedAfter=${lastDate.toISOString()}&pageToken=${nextPageToken}`
    );
    const json = await res.json();
    items = items.concat(json.items);
    nextPageToken = json.nextPageToken;
  }

  const promises = items.map(async (item) => {
    // const slug = slugify(item.snippet.title);
    const slug = `youtube-${item.id.videoId}`; // workaround for avoiding special characters in slug for now using videoId
    const response = await fetch(item.snippet.thumbnails.high.url);

    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    fs.writeFileSync(`../images/${slug}.jpg`, buffer);

    const frontmatter = {
      type: "blog",
      author: "Corey Thompson",
      title: item.snippet.title,
      description: item.snippet.description,
      image: `images/${slug}.jpg`,
      published: item.snippet.publishedAt.split("T")[0],
      video: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    };

    fs.writeFileSync(
      `../content/blog/${slug}.md`,
      `---
type: blog
author: Corey Thompson
title: >
  ${item.snippet.title}
description: >
  ${item.snippet.description}
image: images/${slug}.jpg
published: "${item.snippet.publishedAt.split("T")[0]}"
video: https://www.youtube.com/watch?v=${item.id.videoId}
---
`
    );
  });
  await Promise.all(promises);
};

handle(dir, fs, path)
  .then(() => {
    console.log("done");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });

function slugify(title) {
  return title
    .trim()
    .replace(/ +/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, ""); //TODO: handle numbers at the beginning, and generally better filename handling
}
