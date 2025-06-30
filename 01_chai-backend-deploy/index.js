require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "DipeshMPatel",
  id: 141577046,
  node_id: "U_kgDOCHBLVg",
  avatar_url: "https://avatars.githubusercontent.com/u/141577046?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/DipeshMPatel",
  html_url: "https://github.com/DipeshMPatel",
  followers_url: "https://api.github.com/users/DipeshMPatel/followers",
  following_url:
    "https://api.github.com/users/DipeshMPatel/following{/other_user}",
  gists_url: "https://api.github.com/users/DipeshMPatel/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/DipeshMPatel/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/DipeshMPatel/subscriptions",
  organizations_url: "https://api.github.com/users/DipeshMPatel/orgs",
  repos_url: "https://api.github.com/users/DipeshMPatel/repos",
  events_url: "https://api.github.com/users/DipeshMPatel/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/DipeshMPatel/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Dipesh Patel",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-08-06T17:03:02Z",
  updated_at: "2025-06-06T19:42:12Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dipesh", (req, res) => {
  res.send("<h1>Dipesh</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
