const express = require("express");
const dotenv = require("dotenv");
const question = require("./routers/question")
const auth = require("./routers/auth")
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");



//Environment Variables

dotenv.config({
  path: "./config/env/config.env",
});

//MongoDB connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers)



app.get("/", (req, res, next) => {
  res.send("HEllo");
});
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
