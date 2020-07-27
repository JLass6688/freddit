const express = require('express'),
	  fs = require('fs'),
	  path = require('path'),
	  cors = require('cors');

const app = express();

app.use(cors());

const trending_filepath = './JsonData/trending.json';
const popular_filepath = './JsonData/popular.json';


app.get('/trending', (req, res) => {
  let rawData = fs.readFileSync(path.resolve(__dirname, trending_filepath));
  let json = JSON.parse(rawData);
  res.send(json);
});

app.get('/popular', (req, res) => { // new
  let rawData = fs.readFileSync(path.resolve(__dirname, popular_filepath));
  let json = JSON.parse(rawData);
  res.send(json);
});


app.listen(3000, () => console.log('Server listening on port 3000'));