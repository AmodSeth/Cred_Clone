import React from "react";
import Button from "../Header/Common-comp/Buttons/Button";
import "./Cred.css";

const Cred = () => {
  return (
    <div className="Cred-1 photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="top-part">
            <div className="photo-section-heading">
              we take your money matters seriously.
            </div>
            <div className="photo-section-sub-heading">
            so that you don't have to.
            </div>
          </div>
          <div className="bottom-part">
            <div className="photo-section-writeup">
            never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.
            </div>
          </div>
          <Button buttonText="Experience the upgrade" />
        </div>
      </div>
    </div>
  );
};

export default Cred;
