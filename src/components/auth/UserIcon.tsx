import { useAuth0 } from "@auth0/auth0-react";

const UserIcon = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!user || !isAuthenticated) return;

  return (
    <div className="h-12 w-12">
      <img className="rounded-full" src={user.picture} alt={user.name} />
    </div>
  )
};

export default UserIcon;
