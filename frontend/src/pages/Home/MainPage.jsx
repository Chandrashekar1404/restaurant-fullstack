import React from "react";

import Hero from "../../components/home/Hero/Hero";
import CategorySlider from "../../components/home/CategorySlider/CategorySlider";
import Offers from "../../components/home/Offers/Offers";
import BestSeller from "../../components/home/BestSeller/BestSeller";
import ChefSpecial from "../../components/home/ChefSpecial/ChefSpecial";
import PopularDishes from "../../components/home/PopularDishes/PopularDishes";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import Gallery from "../../components/home/Gallery/Gallery";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import AppDownload from "../../components/home/AppDownload/AppDownload";
import Newsletter from "../../components/home/Newsletter/Newsletter";

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Hero />
      <CategorySlider />
      <Offers />
      <BestSeller />
      <ChefSpecial />
      <PopularDishes />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <AppDownload />
      <Newsletter />
    </>
  );
}

export default MainPage;