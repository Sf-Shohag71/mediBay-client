import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = (event) => {
    event.preventDefault();
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const pages = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/allMedicines">Medicines</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/blog">Blogs</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/blog">Contact</Link>{" "}
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/addMedicine">Add Medi</Link>
          </li>
          <li>
            <Link to="/myMedicines">My Medi</Link>
          </li>
          <li>
              <button onClick={handleLogOut}>Sign out</button>
          </li>
        </>
      ) : (
        <li>
          {" "}
          <Link to="/login">Sign In</Link>{" "}
        </li>
      )}
    </>
  );

  return (
    <div className="container mx-auto my-3 z-40">
      <div className="navbar bg-base-100 font-bold justify-between md:justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {pages}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-24 h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal menu-compact dropdown-content px-1">
            {pages}
          </ul>
        </div>
        {user?.email && (
          <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
            <img
              className="rounded-full h-11 w-12 md:h-11 md:w-16"
              src={user?.photoURL}
              alt=""
            />
          </div>
        )}
        <div className="md:navbar-end md:indicator hidden">
          <span className="indicator-item badge badge-secondary">+0</span>
          <a className="btn btn-outline">
            <IoMdCart className="text-xl"></IoMdCart>&nbsp;Shopping Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
