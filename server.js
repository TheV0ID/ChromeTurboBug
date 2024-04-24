const express = require("express");
const path = require("path");

const server = express();

server.listen(4000, () => console.log("listening"));

server.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "server", "assembly_list.html"));
});

server.get("/scripts.js", (req, res) => {
	res.sendFile(path.join(__dirname, "server", "scripts.js"));
});