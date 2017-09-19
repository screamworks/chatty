
const express = require('express');
const bodyParser = require('body-parser');


const port = 3000;

const messages = [
  {
    message: "messages"
  }
]

const app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});







app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date () });
  res.status(200).json({ messages: messages });
});
