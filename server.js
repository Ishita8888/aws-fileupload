const express = require('express');
const s3= require('./s3');
const app = express()
const cors = require('cors');


const port = 5500;
app.use(cors());
app.use(express.static('front'))

app.get('/s3url',async(req,res)=>{
const url=await s3.generateUploadURL()
res.send({url})
})
app.listen(port, () => {
    console.log(` backend listening at http://localhost:${port}`)
  })