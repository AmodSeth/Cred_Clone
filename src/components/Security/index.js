import React from "react";
import "./index.css";
import Button from "../Header/Common-comp/Buttons/Button";
const Security = () => {
  return (
    <div className="Security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="top-part">
            <div className="photo-section-heading">
            security first. and second.
            </div>
            <div className="photo-section-sub-heading">
            what's yours remains only yours.
            </div>
          </div>
          <div className="bottom-part">
            <div className="photo-section-writeup">
            CRED ensures that all your personal data and transactions are encrypted, and secured so what's yours remains only yours. there's no room for mistakes because we didn't leave any.
            </div>
          </div>
          <Button buttonText="Become a member" />
        </div>
      </div>
    </div>
  );
};

export default Security;
