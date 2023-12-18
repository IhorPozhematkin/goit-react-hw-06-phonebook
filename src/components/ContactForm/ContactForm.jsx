import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone-lite';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from './../../redux/contacts';
import { getContacts } from './../../redux/selectors';
import {
  ButtonSubmit,
  ErrorMessageStyled,
  PhonebookWrapper,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(2).max(30).required('A name is required'),
  number: yup
    .string()
    .phone('UA', true, 'Invalid Ukrainian phone number')
    .required('A phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContact = newContact => {
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContactAction(newContact));
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <PhonebookWrapper>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            <ErrorMessageStyled component="div" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="number" />
            <ErrorMessageStyled component="div" name="number" />
          </Label>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </PhonebookWrapper>
      </FormStyled>
    </Formik>
  );
};
