import { MdOutlineContactPhone, MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Footer() {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <footer className="w-full ">
      <div className="w-full map-bg my-8 sm:my-12 px-4 py-8 sm:py-12 sm:px-10">
        <div className="w-full flex flex-wrap items-start justify-center gap-6">
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
              House No 7 Udeco Medical Road Checy view , Lekki, Eti-Osa LGA,
              Lagos state
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 bg-gray-100 py-4 border-t sm:px-8 sm:py-4 w-full">
        <p className="text-center  ">
          {`© ${new Date().getFullYear()}`}{" "}
          <span className="text-obiman">Obiman.</span> {`All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}
