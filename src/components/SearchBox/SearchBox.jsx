import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNameFilter } from "../../redux/filtersSlice";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getNameFilter);
  const getFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setFilter(name));
  };

  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={getFilter}
      />
    </div>
  );
};

export default SearchBox;
