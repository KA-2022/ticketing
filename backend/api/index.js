`use strict`

const express = require("express");
const router = express.Router();

router.use("/payment", require("./payment"));
router.use("/ticket", require("./ticket"));

module.exports = router;
