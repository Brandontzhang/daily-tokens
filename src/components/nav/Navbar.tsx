import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";
import UserIcon from "./auth/UserIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="w-full h-20 flex flex-row justify-between items-center px-10">
      <Link to="/">logo</Link>
      {!isAuthenticated ? <LoginButton /> : <UserIcon />}
    </nav>
  )
};

export default Navbar;
