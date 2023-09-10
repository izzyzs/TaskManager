import express from "express";
const app = express();
const port = process.env.PORT || 4000;

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});
