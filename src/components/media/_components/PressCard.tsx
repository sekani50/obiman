import architect from "../../../assets/png/archit.jpg";
export function PressCard() {
  return (
    <div className="w-full transform transition-all duration-300 hover:shadow  bg-white rounded-md">
      <div className="w-full h-[200px] rounded-t-md overflow-hidden">
        <img src={architect} alt="" className="w-full h-full" />
      </div>
      <div className="w-full p-3">
        <p className=" text-obiman w-fit  py-1">Press Release</p>
       <h3 className="w-full line-clamp-2 font-semibold text-sm sm:text-base">Obiman Group's Altinsmart Launches Revolutionary E-commerce Platform for Smart Home Technology</h3>
        <p className="w-full mt-2 line-clamp-3 text-gray-600 text-xs sm:text-sm">
          Pioneering sustainable solutions to enhance community living and
          create a smarter future.
        </p>
      </div>
    </div>
  );
}
