'use strict';
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        // Define properties.
        name: DataTypes.STRING,

        // Define getter method for the url
        getterMethods: {
            url() {
                return '/catalog/genre/' + this.id;
            }
        }
    }, {});
    Genre.associate = function(models) {
        // associations can be defined here
    };
    return Genre;
};