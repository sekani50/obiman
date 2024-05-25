import { TopNav } from "../topNav/TopNav";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import biz from "../../assets/png/ppl.jpg";
import { Button } from "../ui/Button";

import { Footer } from "../footer/Footer";
import archit from "../../assets/png/archit.jpg";
import smarthome from "../../assets/png/smarthome.png";
import program from "../../assets/png/learn.png";
import { Companies } from "./companies/Companies";
import { Executives } from "./executives/Executives";
export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="w-full">
      <TopNav />
      {/** hero start */}

      <div className="w-full z-20 bg-container backdrop-blur pt-20 sm:pt-12 flex flex-col lg:flex-row items-center gap-6 justify-between px-4 md:px-12 h-fit  sm:h-[650px] pb-8 sm:pb-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="flex w-full lg:w-[50%] max-w-xl flex-col items-center lg:items-start text-white gap-y-4 justify-center lg:justify-start "
        >
          <p className="font-semibold ">Welcome to Obiman Group</p>
          <h2 className="text-center lg:text-start   text-lg font-semibold sm:text-2xl  ">
            Innovating for a Smarter Future
          </h2>
          <p className="text-sm text-center lg:text-start font-normal  md:text-lg ">
            Obiman Group is a diversified conglomerate dedicated to fostering
            innovation and driving excellence across multiple industries. We
            pioneer sustainable solutions to enhance community living and create
            a smarter future.
          </p>
        </div>

        <div className="w-full lg:w-[50%] flex relative items-center justify-center">
          <div className="bg-white -top-1 left-8 absolute z-50 h-[8rem] w-[9rem] hexagon">
            <img
              src={smarthome}
              alt=""
              className="absolute m-auto inset-0 w-[88%] h-[88%] image-hexagon"
            />
          </div>
          <div className="bg-white -bottom-1 right-8 absolute z-50 h-[8rem] w-[9rem] hexagon">
            <img
              src={program}
              alt=""
              className="absolute m-auto inset-0 w-[88%] h-[88%] image-hexagon"
            />
          </div>
          <div className="bg-white relative  h-[25rem] w-[30rem] hexagon">
            <img
              src={archit}
              alt=""
              className="absolute m-auto inset-0 w-[93%] h-[93%] image-hexagon"
            />
          </div>
        </div>
      </div>

      {/**
             <div
            data-aos="zoom in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="w-full rounded-xl h-fit overflow-hidden  flex items-center justify-center lg:w-[50%]"
          >
            <div className="w-[300px] transform relative sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-obiman"></div>
          </div>
       */}

      {/**hero end */}

      {/** vision and mission */}
      <div id="vision" className="w-full my-10 sm:my-12 ">
        <div className=" w-full flex flex-col  gap-6 items-center justify-center">
          <div className="w-full max-w-3xl   p-6 flex flex-col items-center justify-center  gap-y-6">
            <h2 className="text-center text-black w-full capitalize font-semibold text-base sm:text-2xl">
              Our Vision & Mission
            </h2>
            <p
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="100"
              className=" text-sm text-zinc-600 sm:text-base font-normal text-center "
            >
              Our vision is to be a leading conglomerate known for transforming
              industries and enhancing community living through innovative
              solutions. We aim to create lasting value for our stakeholders by
              empowering our portfolio companies to achieve their full
              potential, driving economic and social progress.
            </p>
            <p
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="200"
              className=" text-sm text-zinc-600 sm:text-base font-normal text-center "
            >
              Our mission is to establish a network of companies that lead in
              adopting advanced technologies, promoting sustainable practices,
              and developing vibrant, supportive communities. We are committed
              to delivering exceptional returns for our investors while
              promoting ethical practices, technological advancement, and
              environmental stewardship across all our ventures.
            </p>

            <Button
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="300"
              className="w-fit  px-10 h-12 border hover:text-white hover:bg-obiman transition-all duration-400 ease-in-out transform border-obiman rounded-none text-obiman"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {/** vision and missio ends */}

      <div id="whoarewe" className="w-full my-10 sm:my-12 ">
        <div className=" w-full flex flex-col-reverse lg:flex-row bg-obiman/90  gap-6 items-center lg:items-start">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="100"
            className="w-full text-white lg:w-[50%] px-4 py-6  sm:px-6 sm:py-8 flex flex-col items-center justify-center md:items-start md:justify-start gap-y-6"
          >
            <h2 className="text-center md:text-start w-full capitalize font-semibold text-base sm:text-2xl">
              Who <span className="">Are</span> We?
            </h2>
            <p className=" text-sm sm:text-base font-normal text-center md:text-start">
              Obiman Group is a multifaceted conglomerate dedicated to pushing the boundaries of
              innovation in real estate, technology, entertainment, and
              e-commerce.
            </p>

            <Button className="w-fit px-10 h-12 border border-white rounded-none text-white">
              Contact Us
            </Button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="overflow-hidden group w-full lg:w-[50%] relative h-[300px]  sm:h-[400px]"
          >
            <div className="absolute z-20 flex items-center justify-center inset-0 w-full h-full rounded-br-[500px] bg-obiman/30"></div>
            <div className="absolute flex items-center justify-center inset-0 w-full h-full bg-obiman"></div>
            <img
              src={biz}
              alt=""
              className="w-full h-full  transition-all duration-300 transform rounded-br-[500px] ease-in-out"
            />
          </div>
        </div>
      </div>
      {/** who are we ends*/}
      <Companies />
      {/** our companies end */}
      <Executives />
      {/** executives end */}

      <Footer />
    </main>
  );
}
