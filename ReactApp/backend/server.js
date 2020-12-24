const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URI;

mongoose.connect(uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const connection = mongoose.connection;

connection.once('open', () =>
{
    console.log("mongodb db connected");
})

const BookreviewRouter = require('./routes/bookReview');
const categoryRouter = require('./routes/category');

app.use('/reviews', BookreviewRouter);
app.use('/categories', categoryRouter);

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

process.on("unhandledRejection" , (err,promise)=>{
  console.log(`Error!!! ${err.message}`);
  server.close(()=>{
    process.exit(1);
  })
})