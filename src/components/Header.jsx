import { useLocation, Link, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import muriousLogo from "../assets/muriousLogo.webp"
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import iiclogo from "../assets/iiclogo.png";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 p-2 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className={`block w-[8rem] xl:mr-6 ${openNavigation == true ? "relative z-3" : ""}`}  href="/">
          <img src={iiclogo} width={40} height={20} alt="logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex lg:!flex-row flex-col items-center justify-center m-auto ">
            {navigation.map((item) => (
              item.url.startsWith('#') ? (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-4 py-4 lg:text-base lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 lg:px-6`}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-4 py-4 lg:text-base lg:font-semibold ${
                    pathname.pathname === item.url
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 lg:px-6`}
                >
                  {item.title}
                </Link>
              )
            ))}
            {isLoggedIn && (
              <>
                <Link
                  to="/events"
                  className="block relative font-code text-n-1 transition-colors hover:text-color-1 px-4 py-4 lg:text-base lg:font-semibold lg:leading-5 lg:hover:text-n-1 lg:px-6"
                >
                  Participate
                </Link>
                <button
                  onClick={handleLogout}
                  className="block relative font-code text-n-1 transition-colors hover:text-color-1 px-4 py-4 lg:text-base lg:font-semibold lg:leading-5 lg:hover:text-n-1 lg:px-6"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <HamburgerMenu />
        </nav>

        

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
