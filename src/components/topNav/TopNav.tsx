
import { useNavigate ,useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
export function TopNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="w-full flex items-center border-b border-b-[#f0f0f0] bg-[#edf6f8] fixed z-50  inset-x-0 top-0 justify-between px-4 md:px-8 py-4">
      <button onClick={() => navigate("/")}>
        <p className="font-bold text-base sm:text-2xl">ObiMan</p>
      </button>
 
      <div className="hidden">
        <Button className="bg-[#f0f0f0] rounded-[3rem]  border-2 border-[#18012e] font-semibold">
          Start Learning
        </Button>
      </div>
    </nav>
  );
}
