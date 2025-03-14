const Sequelize = require('sequelize');

class Todo extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 시퀄라이즈는 기본적으로 id를 기본키로 연결하며 자동으로 생성
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            is_completed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }
        }, {
            sequelize,  // 연결 객체
            timestamps: false,   // createdAt, updatedAt 자동 생성 여부
            underscored: false,  // 카멜케이스 -> 스네이크 케이스 여부
            modelName: 'Todo',   // 모델 이름 설정
            tableName: 'todos',  // 실제 데이터베이스의 테이블 이름 (소문자 & 복수)
            paranoid: false,     // deletedAt 칼럼 생성 여부
            charset: 'utf8',     // utf8 설정
            collate: 'utf8_general_ci'  // 한글 설정
        });
    }
}

module.exports = Todo;