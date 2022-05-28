import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import developer from "../../../Assets/dev.png";
import "./MyPortfolio.css";
import one from "../../../Assets/Freshta.png";
import two from "../../../Assets/Healthy Smile .png";
import three from "../../../Assets/Moto Racer.png";

const MyPortfolio = () => {
  const site1 = () => {
    window.open("https://freshta-management-system.web.app/", "_blank");
  };
  const site2 = () => {
    window.open("https://healthy-smile-70015.web.app/", "_blank");
  };
  const site3 = () => {
    window.open("https://moto-racer.netlify.app/", "_blank");
  };
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <div className="aboutMe container my-5 py-5">
        <div className=" flex justify-center m-10 avatar">
          <img className="mask mask-squircle bg-white" src={developer} alt="" />
        </div>
        <div>
          <h3 className="text-center text-2xl mb-2">
            <span className="text-primary">Hi.....</span> I am
            <span className="text-info font-bold"> Md. Ashiqul Hoque</span>
          </h3>
          <p className="px-5 ml-2">
            My main goal is to be a potential "Web Developer" in near future.
            Where i can express my innovative & creative skills in web
            development. Before setting my career goals, I decided what I wanted
            for the next step in my career. Which will help me to achieve
            success in my career.
          </p>
          <div className="px-5 ml-2 mt-4">
            <h1 className="font-bold mb-4">Email: ashiqul.eee@gmail.com</h1>
            <div className="sm:flex md:gap-x-20">
              <div>
                <h1 className="font-bold">Education:</h1>
                <p>Bachelor's Begree: Bsc.(EEE) from (AIUB)</p>
                <p>HSC: Notre Dame College</p>
                <p>SSC: Motijheel Govt boys' High School</p>
              </div>
              <div>
                <h1 className="font-bold">Skils:</h1>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVA SCRIPT</li>
                <li>REACT</li>
                <li>NODE</li>
                <li>EXPRESS</li>
                <li>MONGODB</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-center text-primary font-bold pb-5">
          My Latest works
        </h1>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3">
          <div className="block mx-auto">
            <img className="h-2/3" src={one} alt="" />
            <button
              className="btn btn-link text-white w-40 bg-blue-700 hover:bg-blue-800 border-none block mx-auto mt-4"
              onClick={site1}
            >
              Live site
            </button>
          </div>
          <div className="block mx-auto">
            <img className="h-2/3" src={two} alt="" />
            <button
              className="btn btn-link text-white w-40 bg-blue-700 hover:bg-blue-800 border-none block mx-auto mt-4"
              onClick={site2}
            >
              Live site
            </button>
          </div>
          <div className="block mx-auto">
            <img className="h-2/3 px-5" src={three} alt="" />
            <button
              className="btn btn-link text-white w-40 bg-blue-700 hover:bg-blue-800 border-none block mx-auto mt-4"
              onClick={site3}
            >
              Live site
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyPortfolio;
