import delay from '../Utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );
    await delay(1000);

    return response.json();
  }
}

export default new ContactsService();
