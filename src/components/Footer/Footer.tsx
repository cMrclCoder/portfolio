import "./Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../LoadingProvider/LoadingProvider";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startLoading } = useLoading();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-green-400 font-bold"
      : "text-neutral-800";

  const handleNavigation = (path: string) => {
    startLoading(() => navigate(path));
  };

  return (
    <div className="w-full flex bg-white/30 backdrop-blur justify-start fixed px-10 bottom-0">
      <div className="w-xs flex justify-between mb-5">
        <button
          onClick={() => handleNavigation("/about")}
          className={`text-xl hover:text-green-400 duration-600 cursor-pointer transition-colors ${isActive(
            "/about"
          )}`}
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("/projects")}
          className={`text-xl hover:text-green-400 duration-600 cursor-pointer transition-colors ${isActive(
            "/projects"
          )}`}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavigation("/contact")}
          className={`text-xl hover:text-green-400 duration-600 cursor-pointer transition-colors ${isActive(
            "/contact"
          )}`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Footer;
