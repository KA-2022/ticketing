`use strict`

const express = require("express");
const app = express();
const http = require("http").createServer(app);

require("dotenv").config();

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
})