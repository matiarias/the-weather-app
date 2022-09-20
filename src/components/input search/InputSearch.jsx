import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const InputSearch = ({ inputValue, setInputValue, location, setLocation }) => {
  const [validation, setValidation] = useState(false);

  const handleInputSearch = ({ target }) => {
    setInputValue(target.value);
    // console.log(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setLocation(inputValue.trim());
      setInputValue("");
      setValidation(false);
    } else {
      // console.log("Ingresa una ciudad");
      setValidation(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="w-[200px] sm:w-[270px] md:w-[320px] h-12 px-4 bg-gray-600/70 border-y-4 border-l-4 border-gray-200/70 rounded-tl-lg rounded-bl-lg focus:outline-none placeholder:italic placeholder:text-gray-100 text-gray-100"
          type="text"
          placeholder="Ingresá una Ciudad"
          maxLength="40"
          autoFocus
          value={inputValue}
          name={location}
          onChange={handleInputSearch}
        />
        <button
          type="submit"
          className="w-12 h-12 rounded-tr-lg rounded-br-lg border-y-4 border-r-4 border-l-2 border-gray-200/70 bg-gray-600/70 flex justify-center items-center"
        >
          <BsSearch className="text-2xl text-gray-100 animate-pulse" />
        </button>
      </form>
      {validation && (
        <h3 className="text-center text-gray-200 text-lg font-bold mt-2">
          Ingresá una ciudad por favor
        </h3>
      )}
    </>
  );
};

export default InputSearch;
