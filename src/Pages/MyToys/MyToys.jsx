import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://toytronix-server.vercel.app/myMedicines?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => setMyToys(result));
    //console.log(myToys);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the item
        fetch(`https://toytronix-server.vercel.app/myMedicines/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "The item has been deleted.", "success");
            }
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "An error occurred while deleting the item.",
              "error"
            );
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full my-10">
          {/* head */}
          <thead>
            <tr>
              <th>Medicines/Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((myToy) => (
              <MyToyTable
                key={myToy?._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
