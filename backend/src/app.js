const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");   
const authRoute = require("../src/routes/user.routes");
const eventRoute = require("../src/routes/event.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/auth", authRoute);
app.use("/event", eventRoute);

module.exports = app;
