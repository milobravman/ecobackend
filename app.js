const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

app.post('/responses', (req,res)=>{
    console.log(res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})