import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import LogoutButton from "./LogoutButton";
import Theme from "./Theme";
import { useEffect } from "react";
// import { useEffect } from "react";

function Navbar(props) {
  const { user, total, totalItems } = props;
  const { theme, setTheme } = props;

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
  },[theme])

  const toggleTheme = (x) => {
    setTheme(x);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            unBundl
          </Link>
        </div>
        <div className="flex-none gap-4">
          {/* buttons and search */}
          {!user && <Theme theme={theme} toggleTheme={toggleTheme} />}
          {user && (
            <>
              {/* <form
                onSubmit={(e) => e.preventDefault()}
                className="flex justify-center items-center"
              >
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto btn-sm"
                  />
                </div>
                <button className="btn btn-sm btn-accent">Search</button>
              </form> */}
              <Theme theme={theme} toggleTheme={toggleTheme} />
              <div className="dropdown dropdown-end z-50">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">{totalItems}</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">{totalItems} Items</span>
                    <span className="text-info">Subtotal: ${total}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        <Link to="/cart">View cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end z-50">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.picture} loading="lazy" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="justify-between" to="/profile">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* login button */}
          {!user && <LoginButton />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
