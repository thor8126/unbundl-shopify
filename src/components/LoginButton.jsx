import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect,isLoading} = useAuth0();

  const handleLogin = ()=>{
    isLoading,
    loginWithRedirect()
  }

  return (
    <button
      className="btn-sm btn btn-outline btn-info"
      onClick={() => handleLogin()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
