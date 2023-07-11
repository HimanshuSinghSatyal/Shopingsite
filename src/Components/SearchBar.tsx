import { BsSearch } from "react-icons/bs";

function SearchBar(props) {
  return (
    
    <div className="relative">
      <h1 className=" text-3xl text-blue-500 text-center"> Enter show Name </h1>
      
      <input className="px-2 py-1 w-full rounded-full border border-black" type="text" placeholder="Search"{...props}  />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
