import { useEffect, useState } from "react";
import { FaFortAwesome } from "react-icons/fa";
import FeaturedToyCard from "./FeaturedToyCard";

const FeaturedToys = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/featuredToys')
        .then(res=>res.json())
        .then(result=> setProducts(result))
    },[])
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <h3 className="text-5xl text-center font-bold mb-8">Featured Products</h3>
      <div className="divider text-6xl text-orange-500">
        <FaFortAwesome></FaFortAwesome>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-24" data-aos="flip-up">
        {
            products?.map(product=><FeaturedToyCard
            key={product?._id}
            product={product}
            ></FeaturedToyCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedToys;
