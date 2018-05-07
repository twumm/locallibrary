'use strict';
module.exports = (sequelize, DataTypes) => {
    const BookInstance = sequelize.define('Book Instance', {
        imprint: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
            defaultValue: 'Maintenance'
        },
        due_back: DataTypes.DATE,
        getterMethods: {
            url() {
                return '/catalog/bookinstance/' + this.id
            }
        }
    });

    BookInstance.associate = (models) => {
        const { Book } = models;
        BookInstance.belongsTo(Book, { as: 'Book', allowNull: false });
    };
    return BookInstance;
};