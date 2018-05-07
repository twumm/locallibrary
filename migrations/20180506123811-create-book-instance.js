'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('BookInstances', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status: {
                type: DataTypes.ENUM,
                values: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
                defaultValue: 'Maintenance'
            },
            imprint: {
                type: Sequelize.STRING
            },
            due_back: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('BookInstances');
    }
};