import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Customers from "./Customer/Customers";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import Statistics from "./Statistics/Statistics";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <HeroSection></HeroSection>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Statistics></Statistics>
        <Reviews></Reviews>
        <Customers></Customers>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
