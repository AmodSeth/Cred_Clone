import React from "react";
import Header from "../components/Header/header";
import Nav from "../components/Header/Common-comp/Nav";
import Product from "../components/ProductShow/Product";
import Feel from "../components/Feelspecial/Feel";
import Cred from "../components/CredExp/Cred";
import Security from "../components/Security/index";
import Brand from "../components/Brands/Brand";
import Window from "../components/WindowPeek/Window";
import Mobilescroll from "../components/Mobilescroll/index";
import CredStory from "../components/CredStory/CredStory";
import Apprating from "../components/AppRating/Apprating";
import Footer from "../components/Footer/Footer";
function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <Product />
      <Feel />
      <Brand />
      <Cred />
      <Mobilescroll />

      <div className="non-mobile">
        <Window />
      </div>

      <Security />
      <CredStory />
      <Apprating />
      <Footer />
    </>
  );
}

export default HomePage;
