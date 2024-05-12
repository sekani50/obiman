import { TopNav } from "../topNav/TopNav";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import biz from "../../assets/png/biz.png";
import { Button } from "../ui/Button";
import smartlogo from "../../assets/png/smartlogo.png";
import ceo from "../../assets/png/ceo.jpg";
import { MdOutlineContactPhone, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Footer } from "../footer/Footer";
export default function Landing() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="w-full">
      <TopNav />
      <div className="w-full h-fit mt-24 sm:mt-32">
        <div className="w-full flex flex-col lg:flex-row px-4 sm:px-10 gap-6 items-center  my-10 sm:my-12">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="flex w-full flex-col items-center gap-y-4 justify-center md:items-start md:justify-start  lg:w-[50%]"
          >
            <h2 className="text-center md:text-start text-lg font-semibold sm:text-xl md:text-6xl ">
              Lorem ipsum dolor sit amet.{" "}
              <span className="text-obiman">adipiscing elit</span>
            </h2>
            <p className="text-sm text-center md:text-start font-semibold md:text-lg ">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="w-full rounded-xl h-fit overflow-hidden  flex items-center justify-center lg:w-[50%]"
          >
            <div className="w-[300px] relative sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-obiman"></div>
          </div>
        </div>
      </div>
      <div className="w-full my-10 sm:my-12 px-4 sm:px-10">
        <div className=" w-full flex flex-col-reverse lg:flex-row  gap-6 items-center lg:items-start">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="w-full lg:w-[50%] flex flex-col items-center justify-center md:items-start md:justify-start gap-y-6"
          >
            <h2 className="text-center md:text-start w-full capitalize font-semibold text-base sm:text-3xl">
              Who <span className="text-obiman">Are</span> We?
            </h2>
            <p className="font-medium text-sm sm:text-lg text-center md:text-start">
              Obiman is your one-stop destination for a seamless and innovative
              shopping experience. As a competitor in e-commerce and dispatch
              services, we bring you a curated selection of the latest smart
              products and cutting-edge solutions designed to enhance your
              everyday life.
            </p>
            <p className="font-medium text-obiman text-sm sm:text-lg text-center md:text-start">
              At Obiman, we believe in the power of technology to transform
              lives. We are constantly exploring new innovations and trends to
              bring you the most up-to-date products and services.
            </p>

            <Button className="w-fit px-10 h-12 rounded-lg bg-obiman text-white">
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

          <p className="font-medium text-sm sm:text-lg text-center md:text-start">
            Obiman is your one-stop destination for a seamless and innovative
            shopping experience. As a competitor in e-commerce and dispatch
            services, we bring you a curated selection of the latest smart
            products and cutting-edge solutions designed to enhance your
            everyday life.
          </p>
          <p className="font-medium text-obiman text-sm sm:text-lg text-center md:text-start">
            At Obiman, we believe in the power of technology to transform lives.
            We are constantly exploring new innovations and trends to bring you
            the most up-to-date products and services.
          </p>
        </div>
      </div>

      <div className="w-full  relative bg-[#111] my-10 sm:my-12 p-4 h-fit sm:p-10">
        <div className="w-full  hidden h-full absolute inset-0 z-10 bg-obiman/80"></div>
        <h2 className="font-semibold text-base sm:text-3xl relative z-40 text-white text-center mb-8 sm:mb-12">
          Our Companies
        </h2>

        <div className="flex flex-wrap relative z-20 items-center justify-center gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={_}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-delay={`${index + 2}00`}
              className="w-[95%] max-w-[300px]  h-[330px] flex flex-col items-center gap-y-3 text-gray-300   border-gray-400 p-4 border  transition-all duration-400 ease-in-out transform"
            >
              <img src={smartlogo} alt="" className="w-[150px] h-[80px]" />
              <h2 className="font-semibold text-white text-sm sm:text-lg mb-2">
                Altinsmart
              </h2>

              <p className=" text-[13px] font-extralight sm:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          ))}
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
