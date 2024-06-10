require("dotenv").config();
let http = require("http");
let express = require("express");
let bodyparser = require("body-parser");
let dbConnect = require('./db/dbConnect');
let cors = require("cors");
let routes = require("./routes");
let app = express();

//cors
app.use(
  cors({
    origin: "*",
  })
);

//body express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/v1", routes);

//database connection
dbConnect();

//server started
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});