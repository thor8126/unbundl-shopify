import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CheckoutPage from "../components/CheckoutPage";
import Cart from "./Cart";
import Profile from "../components/Profile";
import Empty from "./Empty";

export default function App() {
  const { isAuthenticated, user ,isLoading,error} = useAuth0();
  const [theme, setTheme] = useState("dark");

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && <Navbar user={user} theme={theme} setTheme={setTheme} />}
      
      <div className="px-24">
        {!isLoading && (
          <Routes>
            <Route exact path="/" element={isAuthenticated ? <Home user={user} /> : <Empty/>} />
            <Route
              exact
              path="/cart"
              element={isAuthenticated && <Cart user={user} />}
            />
            <Route
              exact
              path="/profile"
              element={isAuthenticated && <Profile user={user} />}
            />
            <Route
              exact
              path="/checkout"
              element={isAuthenticated && <CheckoutPage user={user} />}
            />
          </Routes>
        )}
      </div>
    </>
  );
}
