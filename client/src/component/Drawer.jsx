import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-opacity-0 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer panel */}
      <div
        className={`glass-container flex items-center justify-center fixed top-0 right-0 h-full w-[50%] transform transition-transform duration-300 z-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center">
          {user ? (
            <>
              <h1 className="text-gray-700 capitalize text-3xl">{user.name}</h1>
              <Link
                to="/dashboard"
                className="text-orange-500 text-3xl font-medium"
              >
                <p className="group relative w-max">
                  <span>Dashboard</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                </p>
              </Link>
              <h1
                onClick={handleLogout}
                className="text-gray-700 text-3xl font-medium"
              >
                Logout
              </h1>
            </>
          ) : (
            <div className="flex flex-col sm:flex-row items-center">
              <Link
                to="/login"
                className="text-orange-500 text-2xl sm:text-3xl font-medium"
              >
                <p className="group relative w-max">
                  <span>Login</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                </p>
              </Link>
              <span className="text-3xl text-orange-500 mx-3 hidden sm:block">/</span>
              <Link
                to="/signup"
                className="text-orange-500 text-2xl sm:text-3xl sm:mt-0 mt-4 font-medium"
              >
                <p className="group relative w-max">
                  <span>Sign Up</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-orange-500 group-hover:w-3/6"></span>
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
