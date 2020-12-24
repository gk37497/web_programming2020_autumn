const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const taskRouter=require('./routes/task');
const titlesRouter=require('./routes/title');

app.use('/titles', titlesRouter);
app.use('/tasks',taskRouter);

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

process.on("unhandledRejection" , (err,promise)=>{
  console.log(`Error!!! ${err.message}`);
  server.close(()=>{
    process.exit(1);
  })
})