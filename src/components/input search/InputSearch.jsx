import React from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch = ({ inputCity, setInputCity }) => {
  const handleInputSearch = ({ target }) => {
    setInputCity(target.value);
    // console.log(target.value);
  };

  return (
    <>
      <form className="flex items-center">
        <input
          className="relative w-[300px] h-12 px-4 bg-gray-600/70 border-y-4 border-l-4 border-gray-200/70 rounded-tl-lg rounded-bl-lg focus:outline-none placeholder:italic placeholder:text-gray-100 text-gray-100"
          type="text"
          placeholder="Enter Location"
          maxLength="40"
          value={inputCity}
          onChange={handleInputSearch}
        />
        <button
          type="submit"
          className="w-12 h-12 rounded-tr-lg rounded-br-lg border-y-4 border-r-4 border-l-2 border-gray-200/70 bg-gray-600/70 flex justify-center items-center"
        >
          <BsSearch className="text-2xl text-gray-100 animate-pulse" />
        </button>
      </form>
    </>
  );
};

export default InputSearch;
