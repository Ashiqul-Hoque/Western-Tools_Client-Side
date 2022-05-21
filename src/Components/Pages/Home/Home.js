import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="relative">
        <HeroSection></HeroSection>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Reviews></Reviews>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
