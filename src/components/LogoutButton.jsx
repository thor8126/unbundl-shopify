import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    logout({ logoutParams: { returnTo: window.location.origin } });
    setLoading(true);
  };

  return (
    <>
      {isLoading ? <Loader /> : <button onClick={handleClick}>Log Out</button>}
    </>
  );
};

export default LogoutButton;
