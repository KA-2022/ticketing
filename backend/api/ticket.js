`use strict`

const express = require("express");
const { generateQRCode } = require("../tools");
const router = express.Router();

router.get("/qr", async (req, res) => {
    const data = Buffer.from(req.query.d, "base64").toString("utf-8");
    const buffer = await generateQRCode(data);
    res.header("Content-Type", "image/png");
    res.send(buffer);
});

module.exports = router;
