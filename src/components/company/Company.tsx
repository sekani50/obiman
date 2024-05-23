import { TopNav } from "../topNav/TopNav";
import { Button } from "../ui/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Footer } from "../footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Executives } from "../landing/executives/Executives";
export default function Company() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data } = state;
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <TopNav />
      <div className="w-full bg-biz relative h-[450px] text-white sm:h-[600px] z-30 flex flex-col justify-center gap-y-4 px-4 items-center">
        <div className="w-fit max-w-[200px] h-fit  max-h-[200px]">
          <img
            alt=""
            src={data?.image}
            className="w-full h-full object-contain"
          />
        </div>

        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="font-semibold text-lg sm:text-3xl "
        >
          {data?.name ?? ""}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="w-full max-w-2xl text-sm sm:text-lg text-center"
        >
          {data?.description ?? ""}
        </p>
      </div>
      <div className="w-full my-10 sm:my-12">
        <div className="w-full max-w-3xl mx-auto  p-4 flex flex-col items-start justify-start  gap-y-6">
          <h2 className=" text-black w-full capitalize font-semibold text-base sm:text-3xl">
            {` About ${data?.name ?? ""}`}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
            className=" text-sm text-zinc-600 sm:text-base font-normal "
          >
            {data?.about ?? ""}
          </p>

          <Button
            onClick={() => window.open(data?.websiteLink, "_blank")}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="200"
            className="w-fit  px-0 h-14 bg-white shadow transition-all duration-400 ease-in-out transform  rounded-none "
          >
            <p className="w-fit h-full flex items-center justify-center px-4">
              Visit Website
            </p>
            <div className="w-fit h-full flex items-center justify-center px-4 bg-obiman text-white">
              <MdOutlineKeyboardDoubleArrowRight className="text-[22px] animate-pulse" />
            </div>
          </Button>
        </div>
      </div>
      <Executives />
      <Footer />
    </>
  );
}
