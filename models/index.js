const { Sequelize } = require('sequelize');
const config = require('../config/config.js')['development'];
const db = {};

// mysql 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// db 객체에 모델 추가
const Todo = require('./todos.js');
Todo.init(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Todo = Todo;

module.exports = db;