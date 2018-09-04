const express = require('express');
const template = require('./template');

const server = express();
server.use('/', express.static('build/client'));
var clientRoutes = ['/about', '/']

var recipes = {
    "recipes":[
      {
        "image": "kale_salad.jpg",
        "title": "kale salad",
        "description": "hey this is kale salad"
      },
      {
        "image": "salmon.jpeg",
        "title": "salmon",
        "description": "hey this is salmon"
      },
      {
        "image": "tom_yum.jpg",
        "title": "tom yum soup",
        "description": "hey this is tom yum"
      }
  ]
}


server.get('/recipes', (req, res) => {
  return res.send(JSON.stringify(recipes))
});

server.get('/server', (req, res) => {
  return res.send("hello server")
});

server.get(clientRoutes, (req, res) => res
  .send(template));



server.listen(3000, function() {
    console.log('server running at http://localhost:3000');
});