import { Link } from "react-router-dom";
import { MdUpdate, MdDeleteForever } from "react-icons/md";

const MyToyTable = ({myToy,handleDelete}) => {
    const { _id, name, picture, sub_category, price, email, s_name } = myToy;
    
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
        <Link to={`/updateToy/${_id}`}>
          <button className="btn btn-ghost">
            <MdUpdate className="text-2xl text-black"></MdUpdate>
            &nbsp;
          </button>
        </Link>
        <Link to="/myMedicines">
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">
            <MdDeleteForever className="text-2xl text-black"></MdDeleteForever>
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToyTable;
