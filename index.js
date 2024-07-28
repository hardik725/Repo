require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const github_data = {
  "login": "hardik725",
  "id": 156457305,
  "node_id": "U_kgDOCVNZWQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/156457305?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hardik725",
  "html_url": "https://github.com/hardik725",
  "followers_url": "https://api.github.com/users/hardik725/followers",
  "following_url": "https://api.github.com/users/hardik725/following{/other_user}",
  "gists_url": "https://api.github.com/users/hardik725/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hardik725/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hardik725/subscriptions",
  "organizations_url": "https://api.github.com/users/hardik725/orgs",
  "repos_url": "https://api.github.com/users/hardik725/repos",
  "events_url": "https://api.github.com/users/hardik725/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hardik725/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hardik Pandey",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-01-12T17:00:29Z",
  "updated_at": "2024-07-28T13:49:21Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter',(req, res) =>{
    res.send('hardik725');
})

app.get('/login',(req, res) =>{
    res.send('<h1>please login at chai and code</h1>');
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>Chai Aur Code</h2>');
})

app.get('/github', (req,res) =>{
  res.json(github_data);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})