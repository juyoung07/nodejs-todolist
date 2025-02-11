const express = require("express")
const app = express();
app.listen(3000, () => {
    console.log("listening on 3000")
})

app.use(express.urlencoded({ extended: true }));   // 바디 파서 설정
app.use(express.static("public"));
app.set("view engine", "ejs");

let todos = []
app.get("/", (req, res) => {
    res.render("index", { todos: todos });
});

app.post("/addTask", (req, res) => {
    todos.push(req.body.add);
    res.redirect("/");
})