import { useAuth0 } from "@auth0/auth0-react";
import { Ref } from "react";

interface UserIconProps {
  classname?: string
  floatRef?: Ref<HTMLDivElement>
  [key: string]: any;
}

const UserIcon: React.FC<UserIconProps> = ({ classname, floatRef, ...props }) => {
  const { user, isAuthenticated } = useAuth0();

  if (!user || !isAuthenticated) return;

  return (
    <div ref={floatRef} className={classname} {...props}>
      <img className="rounded-full" src={user?.picture} alt={user.name} loading="lazy" />
    </div>
  )
};

export default UserIcon;
