import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full px-4 bg-gray-100 py-4 border-t sm:px-8 sm:py-4">
      <div className="hidden w-full grid-cols-1 gap-4 items-center md:items-start md:grid-cols-4">
        <div className="flex flex-col items-start justify-start gap-y-14">
          O
          <div className="flex items-center gap-x-4">
            <Link to="https://facebook.com/teesasapp">
              <img
                src="https://teesas.com/assets/matric/images/fb-icon.png"
                alt=""
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/golearn_ng?igsh=eG5yNGJneHg0NGt6&utm_source=qr"
            >
              <img
                src="https://teesas.com/assets/matric/images/insta-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://twitter.com/teesasapp">
              <img
                src="https://teesas.com/assets/matric/images/x-icon.png"
                alt=""
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/posts/golearn-educational-services_golearn-educational-services-linkedin-activity-7188206543295700994-Ii5L?utm_source=share&utm_medium=member_ios"
            >
              <img
                src="https://teesas.com/assets/matric/images/linked-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.youtube.com/channel/UCKUiNZOfRh7ZWWdILQzviOA">
              <img
                src="https://teesas.com/assets/matric/images/youtube-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.tiktok.com/@teesas">
              <img
                src="https://teesas.com/assets/matric/images/tiktok-icon.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col  md:col-span-2 items-start gap-4">
          <div className="flex flex-col items-start">
            <strong className="flex items-center gap-x-2">
              Cross River State, Nigeria{" "}
            </strong>
            Block 26, Federal Housing Estate, Calabar Municipal
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-x-2">
            <Link to="https://play.google.com/store/apps/details?id=app.teesas">
              <img
                src="https://teesas.com/assets/matric/images/g-btn.png"
                alt=""
              />
            </Link>
            <Link to="">
              <img
                src="https://teesas.com/assets/matric/images/apple-btn.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center  ">
        {`© ${new Date().getFullYear()}`}{" "}
        <span className="text-obiman">Obiman.</span> {`All Rights Reserved`}
      </p>
    </footer>
  );
}
