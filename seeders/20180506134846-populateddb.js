'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Authors', [{
            first_name: 'Patrick',
            last_name: 'Rothfuss',
            date_of_birth: '1973-06-06',
            date_of_death: false
        }, {
            first_name: 'Ben',
            last_name: 'Bova',
            date_of_birth: '1932-11-8',
            date_of_death: false
        }, {
            first_name: 'Isaac',
            last_name: 'Asimov',
            date_of_birth: '1920-01-02',
            date_of_death: '1992-04-06'
        }, {
            first_name: 'Bob',
            last_name: 'Billings',
            date_of_birth: false,
            date_of_death: false
        }, {
            first_name: 'Jim',
            last_name: 'Jones',
            date_of_birth: '1971-12-16',
            date_of_death: false
        }], {});

        return queryInterface.bulkInsert('Genres', [{
            name: 'Fantasy'
        }, {
            name: 'Science Fiction'
        }, {
            name: 'French Poetry'
        }], {});


        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};