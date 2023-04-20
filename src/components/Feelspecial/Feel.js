import React from "react";
import Button from "../Header/Common-comp/Buttons/Button";
import './index.css';

const Feel = () => {
  return (
    <div className="Feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="top-part">
            <div className="photo-section-heading">
              feel special more often.
            </div>
            <div className="photo-section-sub-heading">
            exclusive rewards for paying your bills
            </div>
          </div>
          <div className="bottom-part">
            <div className="photo-section-writeup">
            every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.
            
            </div>
            </div>
            <Button buttonText="Explore rewards"/>
          </div>
           
          </div>
          
    </div>
  );
};

export default Feel;
