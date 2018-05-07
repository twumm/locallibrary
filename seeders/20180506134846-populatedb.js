'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        // Insert Authors.
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

        // Insert Genres.
        return queryInterface.bulkInsert('Genres', [{
            name: 'Fantasy'
        }, {
            name: 'Science Fiction'
        }, {
            name: 'French Poetry'
        }], {});

        // Insert Books.
        return queryInterface.bulkInsert('Books', [{
            title: "The Name of the Wind (The Kingkiller Chronicle, #1)",
            summary: "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
            isbn: "9781473211896",
            author: author[0], // This should be the first author
            genre: [genres[0], ] // This should be the first genre in the array
        }, {
            title: "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
            summary: 'Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.',
            isbn: '9788401352836',
            author: authors[0],
            genre: [genres[0], ]
        }, {
            title: 'The Slow Regard of Silent Things (Kingkiller Chronicle)',
            summary: 'Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.',
            isbn: '9780756411336',
            author: authors[0],
            genre: [genres[0], ]
        }, {
            title: 'Apes and Angels',
            summary: 'Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...',
            isbn: '9780765379528',
            author: authors[1],
            genre: [genres[1], ]
        }, {
            title: 'Death Wave',
            summary: "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
            isbn: '9780765379504',
            author: authors[1],
            genre: [genres[1], ]
        }, {
            title: 'Test Book 1',
            summary: 'Summary of test book 1',
            isbn: 'ISBN111111',
            author: authors[4],
            genre: [genres[0], genres[1]]
        }, {
            title: 'Test Book 2',
            summary: 'Summary of test book 2',
            isbn: 'ISBN222222',
            author: authors[4],
            genre: false
        }], {});

        // Insert BookInstances.
        return queryInterface.bulkInsert('BookInstances', [{
            book: books[0],
            imprint: 'London Gollancz, 2014.',
            due_back: false,
            status: 'Available'
        }, {
            book: books[1],
            imprint: 'Gollancz, 2011.',
            due_back: false,
            status: 'Loaned'
        }, {
            book: books[2],
            imprint: 'Gollancz, 2015.',
            due_back: false,
            status: false
        }, {
            book: books[3],
            imprint: 'New York Tom Doherty Associates, 2016.',
            due_back: false,
            status: 'Available'
        }, {
            book: books[3],
            imprint: 'New York Tom Doherty Associates, 2016.',
            due_back: false,
            status: 'Available'
        }, {
            book: books[3],
            imprint: 'New York Tom Doherty Associates, 2016.',
            due_back: false,
            status: 'Available'
        }, {
            book: books[4],
            imprint: 'New York, NY Tom Doherty Associates, LLC, 2015.',
            due_back: false,
            status: 'Available'
        }, {
            book: books[4],
            imprint: 'New York, NY Tom Doherty Associates, LLC, 2015.',
            due_back: false,
            status: 'Maintenance'
        }, {
            book: books[4],
            imprint: 'New York, NY Tom Doherty Associates, LLC, 2015.',
            due_back: false,
            status: 'Loaned'
        }, {
            book: books[0],
            imprint: 'Imprint XXX2',
            due_back: false,
            status: false
        }, {
            book: books[1],
            imprint: 'Imprint XXX3',
            due_back: false,
            status: false
        }]);
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
        return queryInterface.bulkDelete('BookInstances', null, {});
        return queryInterface.bulkDelete('Books', null, {});
        return queryInterface.bulkDelete('Genres', null, {});
        return queryInterface.bulkDelete('Authors', null, {});
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};