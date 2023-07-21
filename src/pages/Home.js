import React from "react";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import OurService from "../components/OurService";
import OurCoffee from "../components/OurCoffee";
import Quote from "../components/Quote";
import Footer from "../components/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeAbout />
      <OurService />
      <OurCoffee />
      <Quote />
      <Footer />
    </div>
  );
}

export default Home;
