import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="p-2 text-gray-400 focus-within:text-gray-600 mt-8"
    >
      <label htmlFor="search">Search All Songs...</label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
