import React, { useState } from "react";

const Header = ({ onSearch }) => {
  let [searchQuery, setSearchQuery] = useState("");
  const searchProducts = () => {
    onSearch(searchQuery);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-black p-4 fixed top-0 left-0 right-0 z-10">
        <p className="text-xl text-orange-400 font-mono font-bold tracking-wide hover:text-orange-500 transition duration-300">
          KARTO
        </p>
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search for Products"
            className="text-orange-200 bg-black border-2 border-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 px-2 rounded-sm"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-400 text-black px-4 py-1 rounded-sm hover:bg-orange-500 transition duration-300 "
            onClick={searchProducts}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
