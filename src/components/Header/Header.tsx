import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../LoadingProvider/LoadingProvider";
import NetworkSpeed from "../NetworkSpeed/NetworkSpeed";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startLoading } = useLoading();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/about":
        return (
          <h1 className="font-bold text-4xl">
            <span className="text-green-400">ABOUT</span> ME
          </h1>
        );
      case "/projects":
        return (
          <h1 className="font-bold text-4xl">
            MY <span className="text-green-400">PROJECTS</span>
          </h1>
        );
      case "/contact":
        return (
          <h1 className="font-bold text-4xl">
            <span className="text-green-400">CONTACT</span> ME
          </h1>
        );
      default:
        return "";
    }
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-green-400 font-bold"
      : "text-neutral-800";

  const handleNavigation = (path: string) => {
    startLoading(() => navigate(path));
  };

  return (
    <div className="w-full z-30 py-5 px-10 bg-white/30 backdrop-blur-md fixed flex justify-between items-center">
      <div>
        <button
          onClick={() => handleNavigation("/")}
          className="text-5xl font-bold cursor-pointer"
        >
          <span className={isActive("/")}>Marcel</span> Wang
        </button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        {getPageTitle() && (
          <h1 className="text-2xl font-bold text-neutral">{getPageTitle()}</h1>
        )}
      </div>

      <div>
        <p className="text-xl font-bold mb-1 text-green-400">Your Speed :</p>
        <NetworkSpeed />
      </div>
    </div>
  );
};

export default Header;
