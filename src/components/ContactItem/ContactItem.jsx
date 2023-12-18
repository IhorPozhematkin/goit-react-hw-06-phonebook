import { useDispatch } from 'react-redux';
import { ButtonDelete, Item } from './ContactItem.styled';
import { removeContactAction } from './../../redux/contacts';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = e =>
    dispatch(removeContactAction(e.currentTarget.id));

  return (
    <Item>
      {contact.name}: {contact.number}
      <ButtonDelete type="button" id={contact.id} onClick={onDeleteContact}>
        Delete
      </ButtonDelete>
    </Item>
  );
};
