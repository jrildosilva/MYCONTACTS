const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
     id: v4(),
     name: 'Rildo',
     email: 'jrsrildo@mail.com',
     fhone: '23221099',
     category_id: v4(),
  },
  {
    id: v4(),
    name: 'Tati',
    email: 'tatipjs@o@mail.com',
    fhone: '2525474765',
    category_id: v4(),
 },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }


  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }
  dlete(id)  {
    return new Promise((resolve) =>  {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
  });
  }
  async create({
    name, email, phone, category_id,
   }) {
     const row = await db.query(`
     INSERT INTO contacts( name, email, phone, category_id)
     VALUES($1, $2, $3, $4)
     `, [name, email, phone, category_id]);
  }

 update( id,{
    name, email, phone, category_id,
   })  {
    return new Promise((resolve) =>  {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
          contact.id === id ? updatedContact : contact
      ));
     resolve(updatedContact);
    });
  }
}


module.exports = new ContactsRepository();
