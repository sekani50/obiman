import { useEffect } from "react";
import ceo from "../../../assets/png/ceo2.png";
import mr from "../../../assets/png/mr.jpg";
import mrs from "../../../assets/png/mrs.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export function Executives() {
  return (
    <>
      <div className="w-full my-10 p-4 sm:my-12 flex flex-col lg:flex-row gap-12 items-center lg:items-start py-4 h-fit sm:py-10">
        <div className=" w-full lg:w-[500px]  bg-obiman   relative h-[400px]  sm:h-[500px]">
          <div className="w-full h-full mt-8 pr-8">
            <img
              src={ceo}
              alt=""
              className="w-full object-cover h-full   ease-in-out"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="w-full lg:w-[50%] gap-y-6 lg:pt-10 flex flex-col items-center justify-center md:justify-start md:items-start"
        >
          <h2 className=" font-semibold text-base sm:text-2xl text-center md:text-start">
            Obitum Jonah Emmanuel
          </h2>

          <p className="font-semibold text-sm border-b-2 border-obiman py-2 sm:text-lg">
            Group President & CEO
          </p>
          <p className=" text-sm text-zinc-600 sm:text-base text-center md:text-start">
            Obitum Jonah Emmanuel is the founder and Chief Executive Officer of
            Obiman Group, a multifaceted conglomerate headquartered in Nigeria
            with a global presence. Under his leadership, the company operates a
            diverse portfolio of businesses in real estate, technology,
            entertainment, and e-commerce. His vision is to harness the
            synergies between these subsidiaries to deliver transformative
            solutions and enrich communities worldwide.
          </p>
        </div>
      </div>
      <div
        id="leadership"
        className="w-full my-10 sm:my-12 flex flex-col gap-6 sm:gap-8 items-center p-4 md:px-10 lg:px-20"
      >
        <h2 className="border-b-2 border-obiman py-3 font-semibold text-base sm:text-2xl text-center">
          Executive Leaders
        </h2>

        <div className="w-full px-4 flex items-center gap-6 flex-wrap justify-center">
          <TeamWidget delay="100" image={mr} title={"Founder"} name={"Mr. A"} />
          <TeamWidget
            image={mrs}
            title={"Communication Officer"}
            name={"Mrs. B"}
            delay="200"
          />
          <TeamWidget
            image={mrs}
            title={"Program Coordinator"}
            name={"Miss D"}
            delay="300"
          />
          <TeamWidget
            delay="400"
            image={mr}
            title={"Advisor"}
            name={"Prof. E"}
          />
        </div>
      </div>
    </>
  );
}

export function TeamWidget({
  image,
  name,
  title,
  delay,
}: {
  image: string;
  name: string;
  title: string;
  delay: string;
}) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos-delay={delay}
      className="w-full  sm:w-[300px] flex flex-col items-center relative"
    >
      <div className="w-full  sm:w-[300px] h-[350px]">
        <img src={image} alt="" className="w-full h-full " />
      </div>

      <h3 className="text-base font-medium sm:text-lg mt-2">{name}</h3>
      <h3 className="text-sm text-gray-500 sm:text-sm font-normal">{title}</h3>
    </div>
  );
}
