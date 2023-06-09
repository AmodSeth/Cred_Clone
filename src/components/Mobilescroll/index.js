import React from "react";
import { useState } from "react";
import "./index.css";
import Screentext from "./Screentext";

const ScrollData = [
  {
    heading: "we've gotyour back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
  },
  {
    heading: "for your eclectic taste.",

    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
  },
];
const Mobilescroll = () => {
  const [CurrentImage, SetCurrentImage] = useState(0);
  return (
    <div className="max-width flex mobile-scroll">
      <div className="scroll-fullscreen-wrapper">
        {ScrollData.map((screen, i) => (
          <div className="scroll-fullscreen">
            <Screentext
              screen={screen}
              i={i}
              SetCurrentImage={SetCurrentImage}
            />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={ScrollData[CurrentImage].img}
              className="mobile-screen-img slide-left"
              key={ScrollData[CurrentImage].img}/>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Mobilescroll;
