import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import About from "./pages/About/About.tsx";
import { LoadingProvider } from "./components/LoadingProvider/LoadingProvider.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Contact from "./pages/Contact/Contact.tsx";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="px-40 flex items-center">
          <div>
            <p className="text-xl">Hello! My name is</p>
            <h1 className="text-5xl">
              <span className="text-green-400">MARCEL</span> WANG
            </h1>
            <p className="text-xl mr-20">
              I am currently studying at{" "}
              <span className="text-green-400">Universitas Pamulang</span> and
              have a deep passion for coding, which has become my primary hobby.
              My ultimate goal is to become a skilled{" "}
              <span className="text-green-400">Full-Stack Web Developer</span>,
              constantly improving my knowledge and expertise in both front-end
              and back-end development.
            </p>
          </div>
          <div className="bg-green-200 rounded-full pt-20 px-10">
            <img src="images/me.png" className="w-360" />
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="relative">
      <Router>
        <LoadingProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </LoadingProvider>
      </Router>
    </div>
  );
};

export default App;
