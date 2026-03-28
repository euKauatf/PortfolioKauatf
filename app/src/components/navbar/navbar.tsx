import { NavLink } from "react-router-dom";
import LeafIcon from "../../assets/images/leaf.svg?react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="bg-special h-14 w-full shadow-md shadow-red-200">
      <ul className="flex space-x-4 geist-mono items-center h-full px-4 text-lg font-medium mx-4">
        <li className="flex justify-start">
          <a href="#">
            <h1 className="flex items-center text-4xl color-special font-bold">
              <span className="color-special-green">/</span>
              euKauatf
              <span className="ml-2">
                <LeafIcon className="w-8 h-8 fill-[#4F772D]" />
              </span>
            </h1>
          </a>
        </li>
        <li className="ml-auto font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link liHover" : "liHover"
            }
          >
            Profissional
          </NavLink>
        </li>
        <li className="ml-4">
          <NavLink
            to="/pessoal"
            end
            className={({ isActive }) =>
              isActive ? "link liHover" : "liHover"
            }
          >
            Pessoal
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
