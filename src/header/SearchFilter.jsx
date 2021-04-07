import { FaSearch } from "react-icons/fa";

function SearchFilter() {
  return (
    <>
      <div className="search-filter">
        <input type="search" placeholder="Search here..." />
        <FaSearch />
      </div>
    </>
  );
}

export default SearchFilter;
