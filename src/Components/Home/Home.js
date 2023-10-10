import React from "react";
import Categories from "./Categories";
import BottunThemeSwitcher from "../buttons/BottunThemeSwitcher";
import Footer from "../Footer/Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <BottunThemeSwitcher />
      <Footer />
    </>
  );
};

export default Home;
