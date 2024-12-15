import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <span>Find contacts by</span>
        <input onChange={e => dispatch(changeFilter(e.target.value))} />
      </label>
    </div>
  );
};

export default SearchBox;
