var express = require("express");
var app = express();

app.get("/Book", (req, res, next) => {
    res.json(["Book1","Book2","Book3","Book4","Book5"]);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});