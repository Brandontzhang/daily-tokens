import { useAuth0 } from "@auth0/auth0-react";
import { useClick, useFloating, useInteractions } from "@floating-ui/react";
import LoginButton from "../auth/LoginButton";
import UserIcon from "../auth/UserIcon";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-end",
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
  ]);

  return (
    <>
      <nav className="w-full h-24 flex flex-row justify-between items-center px-10 bg-slate-300 drop-shadow-sm">
        <Link to="/">logo</Link>
        {!isAuthenticated ?
          <LoginButton /> :
          <UserIcon
            classname="h-12 w-12"
            floatRef={refs.setReference}
            {...getReferenceProps()}
          />
        }
      </nav>
      {isOpen &&
        <UserDropdown
          classname="h-fit w-fit"
          floatRef={refs.setFloating}
          styles={floatingStyles}
          {...getFloatingProps()}
        />
      }
    </>

  )
};

export default Navbar;
