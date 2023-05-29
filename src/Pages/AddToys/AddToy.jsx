import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const s_name = form.s_name.value;
    const email = form.email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const picture = form.picture.value;
    const sub_category = form.dropdown.value;
    const description = form.description.value;

    console.log(
      "Add Toy: ",
      name,
      s_name,
      price,
      quantity,
      ratings,
      picture,
      sub_category,
      description
    );
    const newToy = {
      name,
      s_name,
      price,
      email,
      quantity,
      ratings,
      picture,
      sub_category,
      description,
    };

    fetch("https://toytronix-server.vercel.app/addMedicine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("post data: ", result);
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "New toy added successfully",
          });
        }
      });
  };

  return (
    <div className="container mx-auto my-16">
      <h2 className="text-center text-3xl font-bold mb-6">Add Your Medicine </h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Medicine Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Medicine Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="s_name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price: &#2547;"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              name="ratings"
              placeholder="Ratings"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="picture"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label htmlFor="dropdown" className="label">
              Select an option:
            </label>
            <select
              id="dropdown"
              name="dropdown"
              className="input input-bordered focus:outline-none"
            >
              <option value="">Choose category</option>
              <option value="OTC-Medicines">OTC-Medicines</option>
              <option value="Vitamins & Supplements">
                Vitamins & Supplements
              </option>
              <option value="Personal Care">Personal Care</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Product Description"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-warning btn-block"
            type="submit"
            value="Add Medicine"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default AddToy;
