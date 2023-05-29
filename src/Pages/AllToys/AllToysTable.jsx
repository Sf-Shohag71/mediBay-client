import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
const AllToysTable = ({ allToy }) => {
  const { _id, name, picture, sub_category, price, email, s_name } = allToy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Toys avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <span className="badge badge-ghost badge-sm">{sub_category}</span>
          </div>
        </div>
      </td>
      <td>
        {s_name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td className="text-orange-500 font-bold"><span className="text-2xl font-bold">&#2547;</span> {price}</td>
      <th>
        <Link to={`/medicine/${_id}`}>
          <button className="btn btn-ghost">
            <FcViewDetails className="text-2xl text-orange-500"></FcViewDetails>
            &nbsp;
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysTable;
