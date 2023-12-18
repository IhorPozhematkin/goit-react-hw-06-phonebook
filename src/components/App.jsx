import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookTitle, ContactsTitle, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList />
    </Wrapper>
  );
};
