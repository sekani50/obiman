import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { MdOutlineArrowDropDown, MdClose } from "react-icons/md";
import { cn } from "../../lib/utils";
import { IoMenuOutline } from "react-icons/io5";
import { altinsmartComp, luxecraftComp, smartbestComp } from "../../utils/data";
import logo from "../../assets/png/obil.png";
import { useEffect, useState } from "react";
export function TopNav() {
  const navigate = useNavigate();
  const [isNav, setNav] = useState(false);
  const { pathname } = useLocation();
  const [isBackg, setShowBackg] = useState(false);

  function toggleNav() {
    setNav((prev) => !prev);
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowBackg(true);
      } else {
        setShowBackg(false);
      }
    });
  }, []);

  const aboutUs = [
    { title: "Who are We", link: "/#whoarewe" },
    { title: "Vision & Mission", link: "/#vision" },
  ];

  const businesses = [
    {
      title: "SmartBest Technology",
      link: "/company#smartbest",
      data: smartbestComp,
    },
    { title: "Altinsmart", link: "/company#altinsmart", data: altinsmartComp },
    { title: "Luxecraft", link: "/company#luxecraft", data: luxecraftComp },
  ];

  /**
   <p className="font-bold text-base sm:text-xl text-obiman">
          Obiman Group
        </p>
   */
  return (
    <nav
      className={cn(
        "w-full flex items-center fixed  z-50  inset-x-0 top-0 justify-between px-4 md:px-8 py-3",
        isBackg && "bg-white bg-opacity-85",
        pathname.includes("contact-us") && "bg-obiman "
      )}
    >
      <button className="w-[60px] h-[50px]" onClick={() => navigate("/")}>
        <img src={logo} alt="" className="w-full object-cover h-full" />
      </button>

      <div
        className={cn(
          "hidden md:flex text-white text-sm items-center gap-x-4",
          isBackg && "text-black",
          pathname.includes("contact-us") && "text-white "
        )}
      >
        <button className="flex group  relative items-center">
          <p>About Us</p>
          <MdOutlineArrowDropDown className="text-[22px]" />
          <div className="absolute hidden transition-all duration-200 ease-in-out transform top-6 z-[100] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
            {aboutUs.map(({ title, link }, index, arr) => (
              <a
                key={index}
                className={cn(
                  "p-3 hover:font-semibold w-full text-start border-b border-white",
                  index === arr.length - 1 && "border-b-0"
                )}
                href={link}
              >
                {title}
              </a>
            ))}
          </div>
        </button>
        <button className="flex group relative items-center">
          <p>Our Companies</p>
          <MdOutlineArrowDropDown className="text-[22px]" />
          <div className="absolute hidden transition-all duration-200 ease-in-out transform top-6 z-[150] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
            {businesses.map(({ title, link, data }, index, arr) => (
              <button
                key={index}
                onClick={() => {
                  navigate(link, {
                    state: {
                      data,
                    },
                  });
                }}
                className={cn(
                  "p-3 hover:font-semibold w-full text-start border-b border-white",
                  index === arr.length - 1 && "border-b-0"
                )}
              >
                {title}
              </button>
            ))}
          </div>
        </button>
        <Link to="/contact-us">Contact</Link>
      </div>

      <div className="hidden md:block">
        <Button
        onClick={() => navigate("/contact-us")}
          className={cn(
            "bg-obiman text-white rounded-md h-11  font-semibold",
            pathname.includes("contact-us") && "bg-white text-obiman "
          )}
        >
          Contact Us
        </Button>
      </div>
      <button
        onClick={toggleNav}
        className={cn(
          "text-obiman block md:hidden relative",
          pathname.includes("contact-us") && "text-white "
        )}
      >
        {isNav ? (
          <MdClose className="text-[22px] " />
        ) : (
          <IoMenuOutline className="text-[22px] " />
        )}
        <div
          className={cn(
            "w-full h-full inset-0 fixed z-[100] hidden",
            isNav && "block"
          )}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[250px] absolute modal swipeIn right-0 top-16 bg-white flex flex-col items-start justify-start py-3"
          >
            <button className="w-full px-3 py-2 flex group  relative items-center">
              <p>About Us</p>
              <MdOutlineArrowDropDown className="text-[22px]" />
              <div className="absolute hidden transition-all duration-200 ease-in-out transform top-8 z-[100] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
                {aboutUs.map(({ title, link }, index, arr) => (
                  <a
                    href={link}
                    onClick={() => {
                      toggleNav();
                    }}
                    key={index}
                    className={cn(
                      "p-3 hover:font-semibold w-full text-start border-b border-white",
                      index === arr.length - 1 && "border-b-0"
                    )}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </button>
            <button className="w-full px-3 py-2 flex group relative items-center">
              <p>Our Companies</p>
              <MdOutlineArrowDropDown className="text-[22px]" />
              <div className="absolute hidden transition-all duration-200 ease-in-out transform top-8 z-[150] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
                {businesses.map(({ title, link, data }, index, arr) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(link, {
                        state: {
                          data,
                        },
                      });
                      toggleNav();
                    }}
                    className={cn(
                      "p-3 hover:font-semibold w-full text-start border-b border-white",
                      index === arr.length - 1 && "border-b-0"
                    )}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </button>
            <Link className="w-full px-3 py-2 text-start" to="/contact-us">
              Contact
            </Link>
          </div>
        </div>
      </button>
    </nav>
  );
}

// border-b border-b-[#f0f0f0] bg-[#edf6f8]
