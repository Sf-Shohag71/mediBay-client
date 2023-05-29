import { useEffect, useState } from "react";

import { FaFortAwesome } from "react-icons/fa";
import TabDetails from "./TabDetails";

const CategoryTab = () => {
  const [allToys, setAllToys] = useState([]);
  const [subCategoryTab, setCategoryTab] = useState("Personal Care");

  useEffect(() => {
    fetch(`http://localhost:5000/allMedicines/${subCategoryTab}`)
      .then((res) => res.json())
      .then((result) => setAllToys(result));
  }, [subCategoryTab]);
  const handleTabClick = (tabName) => {
    setCategoryTab(tabName);
  };
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <h3 className="text-5xl text-center font-bold mb-8">Shop By Category</h3>
      <div className="divider text-6xl text-orange-500">
        <FaFortAwesome></FaFortAwesome>
      </div>
          <div className="tabs tabs-boxed align-middle justify-center font-bold py-3">
            <div
              onClick={() => handleTabClick("OTC-Medicines")}
              className={`tab cursor-pointer ${
                subCategoryTab == "OTC-Medicines" ? " bg-orange-500 text-white" : ""
              }`}
            >
              OTC-Medicines
            </div>
            <div
              onClick={() => handleTabClick("Vitamins & Supplements")}
              className={`tab cursor-pointer ${
                subCategoryTab == "Vitamins & Supplements" ? " bg-orange-500 text-white" : ""
              }`}
            >
              Vitamins & Supplements
            </div>
            <div
              onClick={() => handleTabClick("Personal Care")}
              className={`tab cursor-pointer ${
                subCategoryTab == "Personal Care" ? " bg-orange-500 text-white" : ""
              }`}
            >
              Personal Care
            </div>
          </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-24"
        data-aos="flip-up"
      >
        {allToys.map((allToy) => (
          <TabDetails key={allToy._id} allToy={allToy}></TabDetails>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
