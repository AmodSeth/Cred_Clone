import React from "react";
import Button from "./Common-comp/Buttons/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="wrap">
      <div className="flex absolute-center flag">
        <div>
          pay credit card bill. earn guaranteed ₹200 back.
        </div>
      </div>
      <div className="flex absolute-center flex-col header max-width">
        <div className="heading-main">
          rewards for paying credit card bills.
        </div>
        <div className="sub-heading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default Header;
