import PageHeader from '../../components/PageHeader';
import ContacForm from '../../components/ContactForm';

export default function NewContact() {
  return (
   <>
       <PageHeader
         title="Novo Contato"
       />

       <ContacForm
         buttonLabel="Cadastrar"
       />
   </>
  );
}
