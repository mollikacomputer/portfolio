import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Header = ({children}) => {
  const menuItems = (
    <>
      <li>
      <HashLink to="/home/#skill" className="rounded-lg"
      smooth
      >
          Skill
        </HashLink>
      </li>
      <li>
      <HashLink to="/home/#comments" className="rounded-lg"
      smooth
      >
          Comments
        </HashLink>
      </li>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="rounded-lg">
          about
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="rounded-lg">
          contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="rounded-lg">
          Projects
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer z-1000 ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-300 sticky top-0">
            <div className="flex-1 px-2 mx-2">Ranjit Kumar Mandal</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal ">
                {/* <!-- Navbar menu content here --> */}
                {
                    menuItems
                }
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {
                menuItems
            }
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default Header;
