const express = require('express'),
	  fs = require('fs'),
	  path = require('path'),
	  cors = require('cors');

const app = express();

app.use(cors());

const trending_filepath = './JsonData/trending.json';


app.get('/trending', (req, res) => {
  let rawData = fs.readFileSync(path.resolve(__dirname, trending_filepath));
  let json = JSON.parse(rawData);
  res.send(json);
});

app.get('/feed', (req, res) => { // new
  res.send('Homepage! Hello world.');
});


app.listen(3000, () => console.log('Server listening on port 3000'));