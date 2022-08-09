const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

app.use(express.static(path.join(__dirname + "/public")))
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './public')});
});
var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({extended: false})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Parse JSON bodies (as sent by API clients)

var message = ''

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
    message = req.body.value
    send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ecodc3@gmail.com',
    pass: ''
  }
});



async function send() {
    const result = await transporter.sendMail({
        from: 'ecodc3@gmail.com',
        to: 'wendylynch31@gmail.com',
        subject: 'Message from EcoDC',
        text: message
    });

    console.log(JSON.stringify(result, null, 4));
}