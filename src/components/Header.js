import React, { createRef, useEffect } from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

import lottie from 'lottie-web';
import animationData from '../assets/asset-animation/data.json';

const Header = (props) => {

    let animationContainer = createRef();
    let anim = null;

    useEffect(() => {
        anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData
        });
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>William G. dos Santos</strong></h1>
                    <h2>Senior Designer</h2>
                    <em>at <a className="avatar-link" href="http://planning.center" >Planning Center</a></em>
                
                
                    </div>
                <div className="animation-container" ref={animationContainer}/>
                <Footer />
            </header>
        )
}
export default Header;
