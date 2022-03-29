const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})