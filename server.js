const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => `Server is running on port ${PORT}`);
    console.log('Connection successed !! ');
    console.log(`Server is running on port ${PORT}`)

}).catch(err => {
    console.log(err);
})
