'use strict';
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        // Define properties.
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

        // Define getter method for the url
        getterMethods: {
            url() {
                return '/catalog/book/' + this.id;
            }
        }
    });

    // Define associations to the author and genre
    Book.associate = (models) => {
        const { Author, Genre } = models;
        Book.belongsTo(Author, { as: 'Author', allowNull: false });
        Book.hasMany(Genre, { as: 'Genre' });
    };
    return Book;
};