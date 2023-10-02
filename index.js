const PORT = 3000;
const express = require('express');
const app = express();

const mongoose = require('./src/mongoGB_database')

const userRouter = require('./src/routes/Users');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoDB = mongoose.connection;
mongoDB.once('open', () => {
    console.log('Mongoose is connected...');
});



app.use('/users', userRouter);



app.listen(PORT, () => {
    console.log("API is running...  on port " + PORT);
});