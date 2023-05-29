import { useLoaderData } from "react-router-dom";
const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const {
    name,
    picture,
    sub_category,
    price,
    email,
    s_name,
    description,
    ratings,
  } = toyDetails;
  return (
    <div className="container mx-auto text-center my-20 bg-gray-100 py-10 rounded-lg">
      <div className="flex justify-center items-center">
        <img className="place-items-center" src={picture} alt="" />
      </div>
      <div className="pt-6 space-y-3">
        <h3 className="text-3xl font-bold">Toy's Name: <span className="text-orange-500">{name}</span></h3>
        <span className="badge badge-ghost badge-md">{sub_category}</span>
        <p>Seller Name: {s_name}</p>
        <p>Seller Email: {email}</p>
        <p className="font-bold">Price: <span className="text-orange-500"><span className="text-2xl font-bold">&#2547;</span>   {price}</span></p>
        <p className="font-bold">Ratings: <span className="text-orange-500">{ratings}</span></p>
        <p><span className="font-bold">Product Description: </span>{description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
