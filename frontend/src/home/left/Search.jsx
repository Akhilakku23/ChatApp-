import React from 'react'
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="px-6 py-4">
        <form action="">
             <div className="flex space-x-3">
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <button>
      <IoSearch/>
      </button>
     
      </div>
        </form>
     
    </div>
  );
}

export default Search