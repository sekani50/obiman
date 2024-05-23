import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { VscLaw } from "react-icons/vsc";
import { type IconType } from "react-icons";
import { TbBulb } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TCoreValue = {
  title: string;
  description: string;
  Icon: IconType;
};
export default function Career() {
    useEffect(() => {
        Aos.init();
      }, []);
  const coreValues: TCoreValue[] = [
    {
      Icon: TbBulb,
      title: "Innovation",
      description:
        "We encourage creative solutions and forward-thinking approaches.",
    },
    {
      Icon: VscLaw,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our dealings.",
    },
    {
      Icon: GiWorld,
      title: "Sustainability",
      description:
        "We prioritize environmentally and socially responsible practices.",
    },
    {
      Icon: SlBadge,
      title: "Excellence",
      description: " We strive for the highest quality in everything we do.",
    },
  ];
  return (
    <>
      <TopNav />
      <div className="w-full bg-biz relative h-[450px] text-white sm:h-[600px] z-30 flex flex-col justify-center gap-y-4 px-4 items-center">
      <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="w-full font-medium text-center"
        >Career</p>
        <h2
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="font-semibold text-lg sm:text-3xl "
        >
          More than just a Career
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="w-full max-w-2xl text-sm sm:text-lg text-center"
        ></p>
      </div>
      {/**hero ends */}
      <div className="w-full my-10 sm:my-12 ">
        <div className=" w-full flex flex-col  gap-6 items-center justify-center">
          <div className="w-full max-w-3xl   p-6 flex flex-col items-center justify-center  gap-y-6">
            <h2 className="text-center text-black w-full capitalize font-semibold text-base sm:text-2xl">
              Why Work with the Obiman Group?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="100"
              className=" text-sm text-zinc-600 sm:text-base font-normal text-center "
            >
              We are committed to creating a dynamic and inclusive work
              environment that encourages innovation, collaboration, and
              professional development. We believe in nurturing talent and
              providing our employees with opportunities to grow and excel.
            </p>
          </div>
        </div>
      </div>
      {/** why work with us ends */}
      <div className="w-full my-10 sm:my-12 ">
        <div className="w-full   p-4 md:px-10 lg:px-20 flex flex-col items-center justify-center  gap-y-8 sm:gap-y-10">
          <h2 className="text-center text-black w-full capitalize font-semibold text-base sm:text-2xl">
            Our Core Values
          </h2>

          <div className="w-full flex flex-wrap items-center justify-center gap-5 ">
            {coreValues.map(({ Icon, title, description }, index) => (
              <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="100"

                key={index}
                className="w-full max-w-[280px] h-[250px] bg-white  rounded-md p-4 sm:p-6 flex flex-col items-start justify-start gap-y-4"
              >
                <Icon className="text-[40px] text-obiman" />
                <h2 className="font-semibold text-base sm:text-xl ">{title}</h2>

                <p className="">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/** core values ends */}
      <Footer />
    </>
  );
}
