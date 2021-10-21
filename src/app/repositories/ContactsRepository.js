const { uuid } = require('uuidv4');

const contacts = [
  {
     id: uuid(),
     name: 'Rildo',
     email: 'jrsrildo@mail.com',
     fhone: '23221099',
     category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
     return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
