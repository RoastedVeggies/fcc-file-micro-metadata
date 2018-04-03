// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const multer = require('multer')
var upload = multer({});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

//Returns file size of uploaded file
app.post('/', upload.single('file-to-check'), function(req, res){
  var result = {"size":req.file.size};
  res.send(result);
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
