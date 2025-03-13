import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const location = useLocation();

  const { navigate, isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-24 lg:w-32 cursor-pointer"
      />

      <div className="md:flex hidden items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="cursor-pointer"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}{" "}
              </button>{" "}
              |<Link to="/my-enrollments">My enrollments</Link>{" "}
            </>
          )}{" "}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      <div className="md:hidden flex items-center gap-2 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-1 max-sm:text-xs">
          {user && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="cursor-pointer"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator"}{" "}
              </button>{" "}
              |<Link to="/my-enrollments">My enrollments</Link>{" "}
            </>
          )}{" "}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button>
            <img
              onClick={openSignIn}
              src={assets.user_icon}
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
