// server.mjs
// import { createServer } from 'node:http';
// import fs from "node:fs"
// import path from "node:path"

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// const server = createserver((req, res) => {
//   console.log(req.url);
//     if (req.url === '/') {
//       const filepath = path.join(process.cwd(), "trial.html");
//       fs.readfile(filepath, (err, data) => {
// 	if (err) {
// 	  res.writehead(500, { "content-type": "text/plain" });
// 	  res.end("error loading html file");
// 	  return;
// 	}
//
//       res.writehead(200, { 'content-type': 'text/html' });
//       res.end(data);
//     })
//   } else if (req.url.includes('css')) {
//       const filepath = path.join(process.cwd(), "trial.css");
//       fs.readfile(filepath, (err, data) => {
// 	if (err) {
// 	  res.writehead(500, { "content-type": "text/plain" });
// 	  res.end("error loading html file");
// 	  return;
// 	}
//
//       res.writehead(200, { 'content-type': 'text/css' });
//       res.end(data);
//
//     })
//   } else {
//       const filepath = path.join(process.cwd(), "trial.js");
//       fs.readfile(filepath, (err, data) => {
// 	if (err) {
// 	  res.writehead(500, { "content-type": "text/plain" });
// 	  res.end("error loading html file");
// 	  return;
// 	}
//       res.writehead(200, { 'content-type': 'text/javascript' });
//       res.end(data);
//     })
//    }
// });

// starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// run with `node server.mjs`
