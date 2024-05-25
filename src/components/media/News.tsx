import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { PressCard } from "./_components/PressCard";

export default function News() {
  return (
    <>
      <TopNav />

      <div className="w-full px-4 md:px-10 lg:px-20 mb-20  mt-24 lg:mt-32 lg:mb-12">
        <h2 className="font-semibold text-base sm:text-2xl mb-6 sm:mb-8">
          Recent News
        </h2>

       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center gap-4">
       {[1, 2, 3, 4, 5].map((_) => (
          <PressCard />
        ))}
       </div>
      </div>
      <Footer />
    </>
  );
}
