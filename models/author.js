'use strict';
module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        // Define properties.
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_birth: DataTypes.DATE,
        date_of_death: DataTypes.DATE,

        // Define getters for url, fullname, lifespan and formatted dates
        getterMethods: {
            url() {
                return '/catalog/author/' + this.id
            },
            name() {
                return this.first_name + ' ' + this.last_name
            },
            lifespan() {
                var lifetime_string = '';
                if (this.date_of_birth) {
                    lifetime_string = moment(this.date_of_birth).format('MMMM Do, YYYY');
                }
                lifetime_string += ' - ';
                if (this.date_of_death) {
                    lifetime_string += moment(this.date_of_death).format('MMMM Do, YYYY');
                }
                return lifetime_string
            },
            date_of_birth_formatted() {
                return moment(this.date_of_birth).format('YYYY-MM-DD');
            },
            date_of_death_formatted() {
                return moment(this.date_of_death).format('YYYY-MM-DD');
            }
        }
    });
};