import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { ReactSelect } from "../ui/ReactSelect";
import {useForm} from "react-hook-form"
export default function ContactUs() {
  const {control} = useForm({})
  return (
    <main className="w-full h-full">
      <TopNav />
      <div className="w-full sm:max-w-xl mx-auto px-4 my-8 sm:my-12">
        <form className="w-full flex flex-col mt-32 rounded-md px-4 py-8 gap-4 items-center border bg-white  mx-auto">
          <Input
            type="text"
            className="w-full h-12 rounded-md bg-transparent"
            placeholder="Enter Name"
          />
          <Input
            type="email"
            className="w-full h-12 rounded-md bg-transparent"
            placeholder="Enter Email"
          />
          <ReactSelect
            placeHolder="Select Business"
            options={[
              { value: "Altinsmart", label: "Altinsmart" },
              { value: "SmartBest Technology", label: "SmartBest Technology" },
              {
                value: "Luxecraft Home & Interior",
                label: "Luxecraft Home & Interior",
              },
              { value: "DashX Logistics", label: "DashX Logistics" },
            ]}
            name="Business"
            control={control}
          />
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
