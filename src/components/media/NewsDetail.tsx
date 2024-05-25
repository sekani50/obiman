import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { detail } from "../../utils/data";
import smarthome from "../../assets/png/smarthome.png";
export default function NewsDetail() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <TopNav />
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(31, 97%, 13%), rgba(84, 67, 47, 0.5)), url(${smarthome})`,
        }}
        className="w-full bg-news relative h-[450px] text-white sm:h-[600px] z-30 flex flex-col justify-center gap-y-4 px-4 items-center"
      >
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="w-full font-medium text-center"
        >
          Press Release
        </p>

        <h2
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="100"
          className="font-semibold text-lg text-center sm:text-3xl max-w-4xl"
        >
          Obiman Group's Altinsmart Launches Revolutionary E-commerce Platform
          for Smart Home Technology.
        </h2>
      </div>

      <div className="w-full my-10 sm:my-12">
        <div className="w-full max-w-3xl mx-auto  p-4 flex flex-col items-start justify-start  gap-y-6">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-sm text-zinc-600 sm:text-base font-normal"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
