import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { cn } from "../../lib/utils";
export function TopNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const aboutUs = [
    { title: "Who are We", link: "#whoarewe" },
    { title: "Vision & Mission", link: "#vision" },
  ];

  const businesses = [
    { title: "SmartBest Technology", link: "" },
    { title: "Altinsmart", link: "" },
    { title: "Luxecraft", link: "" },
  ]
  return (
    <nav className="w-full flex items-center   z-50  inset-x-0 top-0 justify-between px-4 md:px-8 py-4">
      <button onClick={() => navigate("/")}>
        <p className="font-bold text-base sm:text-xl text-obiman">
          Obiman Group
        </p>
      </button>

      <div className="flex text-sm items-center gap-x-4">
        <button className="flex group  relative items-center">
          <p>About Us</p>
          <MdOutlineArrowDropDown className="text-[22px]" />
          <div className="absolute hidden transition-all duration-200 ease-in-out transform top-5 z-[100] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
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
          <div className="absolute hidden transition-all duration-200 ease-in-out transform top-5 z-[150] text-sm w-[200px] text-white py-2 group-hover:flex flex-col items-start justify-start bg-obiman opacity-80">
            {businesses.map(({ title, link }, index, arr) => (
              <Link
                key={index}
                className={cn(
                  "p-3 hover:font-semibold w-full text-start border-b border-white",
                  index === arr.length - 1 && "border-b-0"
                )}
                to={link}
              >
                {title}
              </Link>
            ))}
          </div>
        </button>
        <Link to="">Contact</Link>
      </div>

      <div className="">
        <Button className="bg-obiman text-white rounded-md h-12 font-semibold">
          Contact Us
        </Button>
      </div>
    </nav>
  );
}

// border-b border-b-[#f0f0f0] bg-[#edf6f8]
