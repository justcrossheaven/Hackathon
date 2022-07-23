const express = require('express');

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/user', (req, res) => {
  const emailExist = await User.findOne({ email: req.body.Id });
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(3001, () =>
  console.log(`Example app listening on port 3001!`),
);