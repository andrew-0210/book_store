// import express from "express";
const express = require("express");
const shopRoutes = require("./routes/shop");
const errorRoute = require("./routes/error");

const app = express();

app.use("/", shopRoutes);

app.use(errorRoute);

app.listen(8080, () => {
	console.log("App listening on PORT 8080");
});
