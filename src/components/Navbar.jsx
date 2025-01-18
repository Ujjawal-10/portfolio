import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`flex flex-wrap justify-between md:items-center text-white px-10 md:px-20 bg-slate-950 border-b-2`}
    >
      <span className="text-xl font-bold tracking-wide my-4">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }  mx-8 py-2 font-semibold my-4 bg-black px-4 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <Link to="/">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </Link>
        <Link to="/experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </Link>
        <Link to="/projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </Link>
        {theme === "light" ? (
          <CiLight size={24} onClick={changeTheme} />
        ) : (
          <MdDarkMode size={24} onClick={changeTheme} />
        )}
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-4 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
