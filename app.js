const express = require("express");
const path = require("path");
const morgan = require("morgan");

require('dotenv').config();

const { sequelize } = require("./models");
const todosRouter = require("./routes/todo");
const app = express();

app.set("port", process.env.PORT);

sequelize.sync({ force: false })  // force: true -> 서버 실행 시마다 테이블 재생성
    .then(() => {
        console.log("Database connection success");
    })
    .catch((err) => {
        console.error("Failed to connect database" + err);
    });

app.use(morgan("dev"));
app.use('/', express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect router
app.use("/api", todosRouter);

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});