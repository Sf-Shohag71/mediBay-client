import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allMedicines")
      .then((res) => res.json())
      .then((result) => setAllToys(result));
  }, []);


  const handleSearch = () =>{
    fetch(`http://localhost:5000/searchToy/${searchText}`)
    .then(res=>res.json())
    .then(result=>{
      setAllToys(result);
    })
  }

  return (
    <div className="container mx-auto">
      <div className="search-box p-3 mt-10 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-3 bg-slate-200 rounded-s-full"
        />
        <button
          className="btn btn-warning  rounded-e-full"
          onClick={handleSearch}
        >
          <FaSearch></FaSearch>
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full my-10">
          <thead>
            <tr>
              <th>Medicine/Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys?.map((allToy) => (
              <AllToysTable key={allToy._id} allToy={allToy}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
