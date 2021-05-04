import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import * as actions from "../constant/actionTypes";

const ENTER_KEYCHAR_CODE = 13;

function SearchFilter() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearchOnClick = () => {
    dispatch({
      type: actions.FETCH_PRODUCT_BY_SEARCH_TEXT,
      payload: searchText,
    });
    history.push(`/products/search/product-title=${searchText}`);
    setSearchText("");
  };
  const handleSearchKeyPress = (e) => {
    if (e.charCode === ENTER_KEYCHAR_CODE) {
      handleSearchOnClick();
    }
  };

  return (
    <div className="search-filter">
      <input
        type="search"
        placeholder="Search here..."
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        onKeyPress={handleSearchKeyPress}
      />
      <FaSearch onClick={handleSearchOnClick} />
    </div>
  );
}

export default SearchFilter;
