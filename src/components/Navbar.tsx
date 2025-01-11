import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex flex-row justify-between items-center px-10">
      <span>logo</span>
      <Link to="/profile">Profile</Link>
    </nav>
  )
};

export default Navbar;
