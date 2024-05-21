import { TopNav } from "../topNav/TopNav";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import biz from "../../assets/png/ppl.jpg";
import { Button } from "../ui/Button";
import smartlogo from "../../assets/png/smartlogo.png";
import ceo from "../../assets/png/ceo.jpg";
import { MdOutlineContactPhone, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Footer } from "../footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import software from "../../assets/png/software.jpg";
import archit from "../../assets/png/archit.jpg";
import arch from "../../assets/png/arch.png";
import htmlcss from "../../assets/png/htmlcss.png";
import hardwork from "../../assets/png/hardwork.png";
import smarthome from "../../assets/png/smarthome.png";
import program from "../../assets/png/learn.png";
import { Companies } from "./companies/Companies";
export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="w-full">
      <TopNav />
      {/** hero start */}
      <div className="w-full bg-container backdrop-blur flex flex-col lg:flex-row items-center gap-6 justify-between px-4 md:px-12  h-fit py-8 sm:py-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          className="flex w-full lg:w-[50%] max-w-xl flex-col items-center lg:items-start text-white gap-y-4 justify-center lg:justify-start "
        >
          <h2 className="text-center lg:text-start   text-lg font-semibold sm:text-2xl  ">
            A Diversified Holding Company
          </h2>
          <p className="text-sm text-center lg:text-start font-light  md:text-lg ">
            Our company is a diversified holding company with a global
            footprint, managing a portfolio of businesses across technology,
            real estate, industrial, and healthcare sectors. We focus on
            delivering innovative solutions and sustainable growth, driving
            value for our stakeholders through strategic investments and
            operational excellence.
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
      <div className="w-full my-10 sm:my-12 ">
        <div className=" w-full flex flex-col  gap-6 items-center justify-center">
          <div className="w-full max-w-3xl   p-6 flex flex-col items-center justify-center  gap-y-6">
            <h2 className="text-center text-black w-full capitalize font-semibold text-base sm:text-2xl">
              Our Vision & Mission
            </h2>
            <p
              data-aos="fade-top"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-delay="100"
              className=" text-sm text-zinc-600 sm:text-lg font-light text-center "
            >
              Our vision is to be a global leader in diversified investments,
              fostering innovation and sustainable growth across multiple
              industries. We aim to create lasting value for our stakeholders by
              empowering our portfolio companies to achieve their full
              potential, driving economic and social progress.
            </p>
            <p
              data-aos="fade-top"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-delay="200"
              className=" text-sm text-zinc-600 sm:text-lg font-light text-center "
            >
              Our mission is to strategically invest in and manage a diverse
              portfolio of businesses, leveraging our expertise to enhance
              operational efficiencies and market competitiveness. We are
              committed to delivering exceptional returns for our investors
              while promoting ethical practices, technological advancement, and
              environmental stewardship across all our ventures.
            </p>

            <Button
              data-aos="fade-top"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="w-fit  px-10 h-12 border hover:text-white hover:bg-obiman transition-all duration-400 ease-in-out transform border-obiman rounded-none text-obiman"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {/** vision and missio ends */}
    
      <div className="w-full my-10 sm:my-12 ">
        <div className=" w-full flex flex-col-reverse lg:flex-row bg-obiman/90  gap-6 items-center lg:items-start">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-full text-white lg:w-[50%] px-4 py-6  sm:px-6 sm:py-8 flex flex-col items-center justify-center md:items-start md:justify-start gap-y-6"
          >
            <h2 className="text-center md:text-start w-full capitalize font-semibold text-base sm:text-2xl">
              Who <span className="">Are</span> We?
            </h2>
            <p className=" text-sm sm:text-lg font-light text-center md:text-start">
              Obiman is your one-stop destination for a seamless and innovative
              shopping experience. As a competitor in e-commerce and dispatch
              services, we bring you a curated selection of the latest smart
              products and cutting-edge solutions designed to enhance your
              everyday life.
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
     <Companies/>
      {/** our companies end */}
      <div className="w-full my-10 sm:my-12 flex flex-col lg:flex-row gap-6 items-center lg:items-start p-4 h-fit sm:p-10">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="200"
          className=" w-full clip lg:w-[500px]   rounded-full border-l-obiman border-t-obiman border-[30px] sm:border-[50px] border-b-obiman border-r-obiman   relative h-[300px]  sm:h-[500px]"
        >
          <img
            src={ceo}
            alt=""
            className="w-full object-cover h-full rounded-full  ease-in-out"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="w-full lg:w-[50%] gap-y-6 lg:pt-10 flex flex-col items-center justify-center md:justify-start md:items-start"
        >
          <h2 className=" font-semibold text-base sm:text-2xl text-center md:text-start">
            About the CEO
          </h2>

          <p className=" text-sm sm:text-lg text-center md:text-start">
            Obiman is your one-stop destination for a seamless and innovative
            shopping experience. As a competitor in e-commerce and dispatch
            services, we bring you a curated selection of the latest smart
            products and cutting-edge solutions designed to enhance your
            everyday life.
          </p>
          <p className=" text-obiman text-sm sm:text-lg text-center md:text-start">
            At Obiman, we believe in the power of technology to transform lives.
            We are constantly exploring new innovations and trends to bring you
            the most up-to-date products and services.
          </p>
        </div>
      </div>

      <div className="w-full map-bg my-8 sm:my-12 px-4 py-8 sm:py-12 sm:px-10">
        <div className="w-full flex flex-wrap items-center justify-center gap-6">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-[250px] gap-y-2 flex flex-col items-center justify-center"
          >
            <MdOutlineContactPhone className="text-[28px] mb-2 sm:text-[40px] text-obiman" />
            <p className="font-semibold text-lg sm:text-2xl ">Call Us</p>
            <p className="text-center">+2348929302323</p>
            <p className="text-center">+2348929302323</p>
          </div>
          {/** */}
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="w-[250px] gap-y-2 flex flex-col items-center justify-center"
          >
            <MdOutlineMailOutline className="text-[28px] mb-2 sm:text-[40px] text-obiman" />
            <p className="font-semibold text-lg sm:text-2xl ">Email Us</p>
            <p className="text-center">info@obiman.com</p>
            <p className="text-center">support@obiman.com</p>
          </div>
          {/** */}
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="w-[250px] gap-y-2 flex flex-col items-center justify-center"
          >
            <HiOutlineLocationMarker className="text-[28px] mb-2 sm:text-[40px] text-obiman" />
            <p className="font-semibold text-lg sm:text-2xl ">Address</p>
            <p className="text-center">
              Elston TCLexington Ave 549MD, London, UK
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
