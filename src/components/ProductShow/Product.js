import React, { useEffect, useRef, useState } from 'react'
import './Product.css'

const Product = () => {
    const [showAnimation, setshowAnimation] = useState(false);
        // using observer api 1:36:00
        const ref = useRef(null);
 
    const toggleAnimation = (e) => {
        if (e[0]?.isIntersecting) {
            setshowAnimation(true);
        }
    };
    
   
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,

    }
    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        } 
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    });
    
    return (
        <div className={`showcase scale-up-bottom ${showAnimation ? "scale-up-bottom" : ""}`}
        ref={ref}>
          <div className="showcase-wrapper">
              <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="img-1" className='showcase-ui img-1' />
              <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="img-2" className='showcase-ui img-2' />
              <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="img-3" className='showcase-ui img-3' />
               <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="img4" className='showcase-ui img-4'/>
               <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="img5" className='showcase-ui img-5' />
          </div>
    </div>
  )
}

export default Product