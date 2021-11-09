`use strict`

const express = require("express");
const router = express.Router();

router.use("/payment", require("./payment"));

module.exports = router;
