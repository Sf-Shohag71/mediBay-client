import { useLoaderData } from "react-router-dom";

const FeaturedToyDetails = () => {
  const featurdToyDetails = useLoaderData();
  const { name, picture, category, price, ratings } = featurdToyDetails;
  return (
    <div className="container mx-auto text-center my-10">
      <div className="flex justify-center items-center">
        <img className="place-items-center" src={picture} alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-sm">category: {category}</p>
        <p className="font-bold text-orange-500">${price}</p>
        <p className="font-bold text-orange-500">Ratings: {ratings}</p>
      </div>
    </div>
  );
};

export default FeaturedToyDetails;
