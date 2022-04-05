
const mongoose = require('mongoose');

const DB = process.env.DATABASE_LOCAL;
exports = mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
   
    console.log('Connection successed !! ');

}).catch(err => {
    console.log(err);
})