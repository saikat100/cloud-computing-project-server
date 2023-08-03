const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Welcome to Bike Repair Server API");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
