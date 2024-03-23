const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contact"); // New route file for Contact Us

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use("/contactus", contactRouter); // Use the contact router for /contactus route

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(8000);
