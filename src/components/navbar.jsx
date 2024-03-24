import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-base-100 p-5">
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl">Qitir Tiri📄</NavLink>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="flex gap-4 items-center ">
            <NavLink className="btn btn-ghost text-xl" to="/profile">
              {user.user}
            </NavLink>
            <NavLink to="/logout" className="btn btn-outline">
              LogOut
            </NavLink>
          </div>
        ) : (
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
