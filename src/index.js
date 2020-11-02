require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const { system, memory } = require("./info");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/views"));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("index", { system: system });
});

io.on("connection", socket => {
    socket.on("request-data", () => {
        socket.emit("new-data", memory());
    });
});

server.listen(port, () => {
    console.log(`Server Running in port: ${port}`);
});
