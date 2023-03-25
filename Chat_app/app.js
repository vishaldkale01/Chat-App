const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

const socketConnection = require("./connections/socket");
    
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./viwes");
global.io = new Server(server);

// socket connection

socketConnection(io);

app.get("/", (req, res) => res.render("index"));

let port = process.argv[2];
server.listen(port, () => console.log("Server listen on port", port));
