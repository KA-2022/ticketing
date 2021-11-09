`use strict`

const express = require("express");
const app = express();
const http = require("http").createServer(app);

require("dotenv").config({
    path: `./env/${process.env.NODE_ENV === "development" ? "dev" : "prod"}.env`
});

const port = process.env.PORT || 8000;

app.enable("trust-proxy");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api = require("./api");
const router = express.Router();
router.use("/api", api);
app.use(router);

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

http.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});
