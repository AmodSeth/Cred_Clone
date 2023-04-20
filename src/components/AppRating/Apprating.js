import React from "react";
import Button from "../Header/Common-comp/Buttons/Button";
import "./Apprating.css";
const getimg = () => {
    return <img  src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" className="app-rating-icon" alt='img-1'/>
}
const getimg2 = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" className="app-rating-icon" alt = 'img-2'/>
}
const Apprating = () => {
    return <div className="max-width flex app-rating">
        <div className="app-rating-block flex flex-col">
            <div className="flex">
                <div className="app-rating-value flex flex-col">4.8
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="raing" className="App-taing-stars"/>
                </div>
                <div className="app-rating-platfom">app <br />store</div>
            </div>
            <div className="non-mobile">
            <Button buttonText='Download the app' customClasses='app-rating-button' Img={getimg()} />
        </div>
        </div>
        <div className="app-rating-block flex flex-col">
            <div className="flex">
                <div className="app-rating-value flex flex-col">4.7
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="raing" className="App-taing-stars"/>
                </div>
                <div className="app-rating-platfom">play<br />store</div>
            </div>
            <div className="non-mobile">
            <Button buttonText='Download the app' customClasses='app-rating-button' Img={getimg2()} />
            </div>
            <div className="only-mobile">
                <Button buttonText='Download the app'/>
            </div>
        </div>
        
  </div>;
};

export default Apprating;
