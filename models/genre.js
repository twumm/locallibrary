'use strict';
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        name: DataTypes.STRING,

        getMethods: {
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