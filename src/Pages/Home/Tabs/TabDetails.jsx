import { Link } from "react-router-dom";

const TabDetails = ({allToy}) => {
    const { _id,name, picture, sub_category, price, ratings } = allToy || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <p className="text-sm bg-gray-100 w-1/2 mx-auto rounded-full">
          {sub_category}
        </p>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>Ratings: {ratings}</p>
        <p className="text-warning font-bold"><span className="text-2xl font-bold">&#2547;</span> {price}</p>
        <div className="card-actions justify-around">
          <button className="py-2 px-6 btn-warning rounded-full text-white">
            Add to cart
          </button>
          <Link to={`/medicine/${_id}`}>
            <button className="py-2 px-6 btn-warning rounded-full text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default TabDetails;