import { useDispatch } from 'react-redux';
import { ButtonDelete, Item } from './ContactItem.styled';
import { removeContactAction } from './../../redux/contacts';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(removeContactAction(contact.id));

  return (
    <Item>
      {contact.name}: {contact.number}
      <ButtonDelete type="button" onClick={onDeleteContact}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
