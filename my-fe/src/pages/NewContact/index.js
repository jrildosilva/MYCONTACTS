import PageHeader from '../../components/PageHeader';
import ContacForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category_id,
      };

      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato!');
    }
  }

  return (
   <>
       <PageHeader
         title="Novo Contato"
       />

       <ContacForm
         buttonLabel="Cadastrar"
         // eslint-disable-next-line react/jsx-no-bind
         onSubmit={handleSubmit}
       />
   </>
  );
}
