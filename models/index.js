const { Sequelize } = require('sequelize');
const env = 'development';
const config = require('../config/config.js')[env];
const db = {};

// mysql 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db 객체에 모델 추가
db.Todo = require('./todos.js');

// 모델 초기화
db.Todo.init(sequelize);

module.exports = db;
