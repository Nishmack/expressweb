const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});
router.post("/", (req, res, next) => {
  const { name, email } = req.body;
  res.redirect("/success");
});
// Define route to show success message
router.get("/success", (req, res) => {
  res.send("Form successfully filled!");
});
module.exports = router;
