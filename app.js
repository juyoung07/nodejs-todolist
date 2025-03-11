const express = require("express")
const app = express();

const port = 8080;

app.get("/", (req, res) => {
    res.send("hi");    // 나중에 html 파일로 대체
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});