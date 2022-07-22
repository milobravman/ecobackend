const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');


var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({extended: false})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Parse JSON bodies (as sent by API clients)


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  express.json()
  bodyParser.json()
  next();
})

app.post('/responses', jsonParser , (req,res)=>{
    //console.log(res);
    console.log(req.body.value);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})