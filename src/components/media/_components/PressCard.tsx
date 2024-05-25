import { Link } from "react-router-dom";
import architect from "../../../assets/png/archit.jpg";
export function PressCard() {
  return (
    <Link
      to="/news-detail"
      className="w-full transform transition-all duration-300 hover:shadow-md  bg-white rounded-md"
    >
      <div className="w-full h-[200px] rounded-t-md overflow-hidden">
        <img src={architect} alt="" className="w-full h-full" />
      </div>
      <div className="w-full p-3">
        <p className=" text-obiman w-fit font-medium py-1">Press Release</p>
        <h3 className="w-full line-clamp-2 font-semibold text-sm sm:text-base">
          Obiman Group's Altinsmart Launches Revolutionary E-commerce Platform
          for Smart Home Technology
        </h3>
        <p className="w-full mt-2 line-clamp-4 text-gray-600 text-xs sm:text-sm">
          Obiman Group, a leading diversified conglomerate, is excited to
          announce a groundbreaking development at its subsidiary, Altinsmart.
          The company has officially launched a state-of-the-art e-commerce
          platform that promises to redefine the smart home technology market.
          This innovative platform, developed with the expertise of Smartbest
          Technology, aims to centralize and streamline the purchasing process
          for smart home products, offering an enhanced user experience and
          unparalleled convenience.
        </p>
      </div>
    </Link>
  );
}
