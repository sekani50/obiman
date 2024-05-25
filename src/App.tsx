import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, ContactUs, Company, Career, News, NewsDetail } from "./pages";

import Scrolltotop from "./components/ui/ScrollToTop";

const App: FC = () => {
  return (
    <div className="App w-full h-full text-black text-[13px] sm:text-sm">
      <Router>
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={< News/>} />
          <Route path="/news-detail" element={< NewsDetail/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
