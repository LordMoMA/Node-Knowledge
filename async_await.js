import fetch from 'node-fetch';
import express from 'express';


async function getGitHubUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        console.log(userData.name);
        console.log(userData.location);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// getGitHubUser('LordMoMA');
// getGitHubUser('octocat');
// getGitHubUser('DavidLee');
// getGitHubUser('HelenKOK');

const app = express();
const port = 3000;

app.get('/users/:username', async (req, res) => {
    const response = await fetch(`https://api.github.com/users/${req.params.username}`);
    const user = await response.json();

    res.send(user);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// one way
export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id
      }
    })
  
    res.json({data: product})
  }

  // another way

  async function createProduct(req, res) {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id
      }
    })
  
    res.json({data: product})
  }
  
  export { createProduct };

  // third way
  export const createProduct3 = (req, res) => {
    prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id
      }
    })
    .then(product => {
      res.json({data: product})
    })
    .catch(error => {
      // handle error here
      res.status(500).json({error: error.message});
    });
  }

/*
{
  "login": "LordMoMA",
  "id": 67067729,
  "node_id": "MDQ6VXNlcjY3MDY3NzI5",
  "avatar_url": "https://avatars.githubusercontent.com/u/67067729?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/LordMoMA",
  "html_url": "https://github.com/LordMoMA",
  "followers_url": "https://api.github.com/users/LordMoMA/followers",
  "following_url": "https://api.github.com/users/LordMoMA/following{/other_user}",
  "gists_url": "https://api.github.com/users/LordMoMA/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/LordMoMA/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/LordMoMA/subscriptions",
  "organizations_url": "https://api.github.com/users/LordMoMA/orgs",
  "repos_url": "https://api.github.com/users/LordMoMA/repos",
  "events_url": "https://api.github.com/users/LordMoMA/events{/privacy}",
  "received_events_url": "https://api.github.com/users/LordMoMA/received_events",
  "type": "User",
  "site_admin": false,
  "name": "David Lee",
  "company": null,
  "blog": "https://medium.com/@lordmoma",
  "location": "Toronto, Ontario, Canada",
  "email": null,
  "hireable": null,
  "bio": "Indie Hacker | Go dev | Serial Entrepreneur",
  "twitter_username": null,
  "public_repos": 75,
  "public_gists": 0,
  "followers": 28,
  "following": 89,
  "created_at": "2020-06-17T16:41:54Z",
  "updated_at": "2024-02-05T02:24:04Z"
}
*/