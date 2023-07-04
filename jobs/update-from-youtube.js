const fs = require("fs");
const path = require("path");
const key = "AIzaSyD0EE7EB_NkN3lUbGIgXEvbxGcSKQwD48w";
const channelId = "UC2od81AMlgwctg2hCfVSe_A";
const date = "2023-07-01T00:00:00Z";
const dir = "../content/blog";
const cmd = `git log -1 --pretty="format:%ct" ../content/blog/`;
const { spawnSync } = require("child_process");

const handle = async (dir, fs, path) => {
  const proc = spawnSync("git", [
    "log",
    "-1",
    "--format=%ct",
    "../content/blog/",
  ]);
  const lastTs = proc.stdout.toString();
  const lastDate = new Date(lastTs * 1000);
  console.log(lastDate.toISOString());
  //   const files = fs.readdirSync(dir);
  //   const foo = files.map((file) => {
  //     const filePath = path.join(dir, file);
  //     console.log(filePath);
  //     return fs.statSync(filePath).ctime;
  //   });
  //   console.log(foo);

  // https://developers.google.com/youtube/v3/docs/search
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?&key=${key}&order=date&channelId=${channelId}&part=snippet&publishedAfter=${lastDate.toISOString()}`
  );
  const json = await res.json();
  console.log(json);

  json.items.forEach((item) => {
    fs.writeFileSync(
      `../content/blog/${slugify(item.snippet.title)}.md`,
      `
---
{
  "type": "blog",
  "author": "Corey Thompson",
  "title": "${item.snippet.title}",
  "description": "${item.snippet.description}",
  "image": "${item.snippet.thumbnails.high.url}",
  "published": "${item.snippet.publishedAt}",
}
---
`
    );
  });
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
    .replace(/[^a-z0-9-]/g, "");
}
