import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import isEmailValid from '../../Utils/isEmailValid';
import formatPhone from '../../Utils/formatPhone';
import useErrors from '../../Hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

import { Form, ButtonContainer } from './Styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }
    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'e-mail', message: 'e-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();

    console.log({
      name, email, phone, categoryId,
    });
  }

  return (
     // eslint-disable-next-line react/jsx-no-bind
     <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleNameChange}
        />
      </FormGroup>

       <FormGroup error={getErrorMessageByFieldName('email')}>
         <Input
           typy="email"
           error={getErrorMessageByFieldName('email')}
           placeholder="E-mail"
           value={email}
           // eslint-disable-next-line react/jsx-no-bind
           onChange={handleEmailChange}
         />

       </FormGroup>

       <FormGroup>
         <Input
           placeholder="Telefone"
           value={phone}
           // eslint-disable-next-line react/jsx-no-bind
           onChange={handlePhoneChange}
           maxLength="15"
         />
       </FormGroup>

       <FormGroup isLoading={isLoadingCategories}>
         <Select
           value={categoryId}
           onChange={(event) => setCategoryId(event.target.value)}
           disabled={isLoadingCategories}
         >
           <option value="">sem Categoria</option>
           {categories.map((category) => (
             <option key={category.id} value={category.id}>
               {category.name}
             </option>
           ))}
         </Select>
       </FormGroup>

       <ButtonContainer>
       <Button type="submit" disabled={!isFormValid}>
         {buttonLabel}
       </Button>
       </ButtonContainer>
     </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
