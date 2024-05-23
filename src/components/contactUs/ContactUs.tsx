import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
export default function ContactUs() {
  return (
    <main className="w-full h-full">
      <TopNav />
      <div className="w-full sm:max-w-xl mx-auto px-4 my-8 sm:my-12">
        <form className="w-full flex flex-col mt-32 rounded-3xl p-4 gap-4 items-center border bg-white border-golearn mx-auto">
          <Input className="w-full h-12 rounded-md bg-transparent" placeholder="Enter Email" />
          <Textarea
            className="rounded-md"
            placeholder="Enter your Message"
          ></Textarea>
          <Button className="text-white font-medium bg-obiman h-12 rounded-md w-fit px-10">
            Contact Us
          </Button>
        </form>
      </div>

      <Footer />
    </main>
  );
}
