const express = require("express");
const { getAllAffiliates } = require("../controllers/affiliateController");

const router = express.Router();

router.get('/', getAllAffiliates);

module.exports = router;