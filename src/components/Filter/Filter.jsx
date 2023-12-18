import { ContactsTitle } from 'components/App.styled';
import { FindInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from './../../redux/filter';
import { getFilter } from './../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFind = e => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <div>
      <ContactsTitle>Find contacts by name</ContactsTitle>
      <FindInput type="text" value={filter} onChange={handleFind} />
    </div>
  );
};
