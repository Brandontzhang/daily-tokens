import { Ref, CSSProperties } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { FaRegUser } from 'react-icons/fa';
import { PiSignOut } from 'react-icons/pi';

import LogoutButton from "../auth/LogoutButton";

interface UserDropdownProps {
  classname?: string
  styles?: CSSProperties,
  floatRef: Ref<HTMLDivElement>,
}

const UserDropdown: React.FC<UserDropdownProps> = ({ classname, styles, floatRef }) => {
  const { user, isLoading } = useAuth0();
  return (
    <div
      ref={floatRef}
      style={styles}
      className={clsx('mt-4 rounded-md border border-slate-100 shadow-md bg-slate-100', classname)}
    >
      <div className='flex flex-col items-start'>
        {!isLoading && user?.picture &&
          <div className='flex flex-row justify-stretch space-x-4 items-center p-4'>
            <img className="w-8 h-8 rounded-full" src={user?.picture} alt={user?.name} loading='lazy' />
            <div className='flex flex-col'>
              <span>{user?.name}</span>
              <span className='font-extralight'>{user?.email}</span>
            </div>
          </div>
        }
        <div className='w-full h-fit rounded hover:bg-slate-200 p-4'>
          <Link to="/profile" className='flex flex-row justify-start items-center space-x-2 font-extralight hover:bg-slate-200'>
            <FaRegUser />
            <span>Your Profile</span>
          </Link>
        </div>
        <div className='w-full h-fit rounded hover:bg-slate-200 p-4'>
          <div className='flex flex-row justify-start items-center space-x-2 font-extralight hover:bg-slate-200'>
            <PiSignOut size={20} />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserDropdown;
