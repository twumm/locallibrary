'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        summary: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isbn: {
            type: Sequelize.STRING,
            allowNull: false
        },
        getterMethods: {
            url() {
                return '/catalog/book/' + this.id;
            }
        }
    });

    Book.associate = (models) => {
        const { Author, Genre } = models;
        Book.belongsTo(Author, { as: 'Author', allowNull: false });
        Book.hasMany(Genre, { as: 'Genre' });
    };
    return Book;
};