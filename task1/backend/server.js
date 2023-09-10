
const express = require('express');
const s3 = require('./s3');
const app = express();
const cors = require('cors');

const port = 5500;
app.use(cors());
app.use(express.static('front'));

// app.post('/s3url', async (req, res) => {
//   const url = await s3.generateUploadURL();
//   res.send({ url });
// });
app.get('/demo',(req,res) =>{
  res.send("Hello")
})
app.get('/s3url', async (req, res) => {
    try {
      const url = await s3.generateUploadURL();
      res.json({ url });
    } catch (error) {
      console.error('Error generating S3 URL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
