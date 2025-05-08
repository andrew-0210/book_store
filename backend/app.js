// import express from "express";
const express = require("express");
const cors = require("cors");
const shopRoutes = require("./routes/shop");
const errorRoute = require("./routes/error");

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

const app = express();
app.use(cors({ origin: allowedOrigins }));

app.use("/", shopRoutes);

app.use(errorRoute);

app.listen(8080, () => {
	console.log("App listening on PORT 8080");
});
