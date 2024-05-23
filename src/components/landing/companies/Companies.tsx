import altinsmart from "../../../assets/png/altis.png";
import luxecraft from "../../../assets/png/luxe.jpg";
import smartbest from "../../../assets/png/programmer.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Button } from "../../ui/Button";
import {
  altinsmartComp,
  luxecraftComp,
  smartbestComp,
} from "../../../utils/data";
export function Companies() {
  const navigate = useNavigate();
  const listOfCompanies = [
    {
      name: "Altinsmart",
      link: "/company#altinsmart",
      image: altinsmart,
      data: altinsmartComp,
    },
    {
      name: "SmartBest Technology",
      link: "/company#smartbest",
      image: smartbest,
      data: smartbestComp,
    },
    {
      name: "Luxecraft Home & Interior",
      link: "/company#luxecraft",
      image: luxecraft,
      data: luxecraftComp,
    },
  ];
  return (
    <div className="w-full my-10 sm:my-12 ">
      <div className=" w-full flex flex-col gap-6 sm:gap-8 items-center justify-center">
        <h2 className="text-center text-black w-full capitalize font-semibold text-base sm:text-2xl">
          Our Businesses
        </h2>

        <p className="px-4 text-center w-full max-w-2xl text-[13px] sm:text-sm">
          Obiman Group encompasses a diverse portfolio of subsidiaries, each
          specialized in different sectors yet united under a common goal of
          innovation and quality.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full px-4 md:px-10 lg:px-20">
          {listOfCompanies.map(({ name, link, image, data }, index) => (
            <button
              onClick={() =>
                navigate(link, {
                  state: {
                    data,
                  },
                })
              }
              key={index}
              className="w-full sm:w-[300px] group flex flex-col items-start justify-start gap-y-3"
            >
              <div className="w-full overflow-hidden rounded-t-md h-48">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover transition-all transform group-hover:scale-110"
                />
              </div>
              <p className="px-2">{name}</p>
              <Button className="mx-2 border-obiman h-11 border rounded-none text-obiman flex items-center gap-x-1 group-hover:text-white group-hover:bg-obiman transition-all duration-400 ease-in-out transform">
                <p>More</p>
                <MdOutlineKeyboardDoubleArrowRight className="animate-pulse text-[22px]" />
              </Button>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
