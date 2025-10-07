import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header className="navbar">
      <nav className="bg-[#CDC8B8] text-black p-0.5 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-10 mx-10">
          <img src="/logo.png" alt="Logo" className="w-[53px] h-[53px]" />
          <p className="text-black text-[24px]">Kryptosbase</p>
        </div>

        <div className="navlinks flex gap-[14px] text-[24px] mx-10">
          <NavLink 
          to="/"
          className={({ isActive }) =>
          isActive
          ? "text-[#C0A887]"
          : "text-black hover:text-gray-700"
           } >
          Home</NavLink>

          <NavLink 
          to="/ciphers"
          className={({ isActive }) =>
          isActive
          ? "text-[#C0A887]"
          : "text-black hover:text-gray-700"
          }>
          Cryptography Algorithms</NavLink>

          <NavLink 
          to="/contact"
          className={({ isActive }) =>
          isActive
          ? "text-[#C0A887]"
          : "text-black hover:text-gray-700"
          }>
          Contact </NavLink>
      </div>
      </nav>
    </header>
  );
}

export default NavBar