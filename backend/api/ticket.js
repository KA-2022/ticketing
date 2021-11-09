`use strict`

const express = require("express");
const { generateQRCode } = require("../tools");
const router = express.Router();

router.get("/", async (req, res) => {
    const data = "Lorem ipsum";
    const buffer = await generateQRCode(data);
    res.header("Content-Type", "image/png");
    res.send(buffer);
});

module.exports = router;
