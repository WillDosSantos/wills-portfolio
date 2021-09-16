---
title: Lottie + Gatsby
date: '2021-09-15T22:40:32.169Z'
description: A case study on the Lottie animation library and working with GatsbyJS.
---

Based on a talk I gave at Full Stack talks on September 9th 2021. This talk gives and overview of the pros and cons of working with Lottie and Gatsby seeking to improve workflows for designers, developers, and user experiences.

## Lottie Safari Glitch

As mentioned in the talk, if you are experiencing a glitching on your svg animation in Safari, one solution that you can try is setting your svg element to a height of auto with like so:

```
svg {
  height: auto!important;
}
```

This isn't meant to be a permanent fix but can solve the problem quickly if you are in a bind.

## Lottie Component Example for GatsbyJS

The best way to have your animations set up on your GatsbyJS site is to have each of them as their own component and then import them into the page that you want. Below is some example code of how you could set that up.

```
import React, { createRef, useEffect } from 'react'

// import lottie
import lottie from 'lottie-web';

// For when animationContainer is on screen
import OnScreen from 'onscreen';

// import animation data
import animationData from './animation-data/your-animation.json';

const YourAwesomeAnimation = (props) => {
  let lottieAnimationName = createRef();
  let anim = null;

  useEffect(() => {
    anim = lottie.loadAnimation({
    container: lottieAnimationName.current,
    renderer: "svg",
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      progressiveLoad: true,
    }
    });

    // Go to the first frame and pause
    anim.goToAndStop(0);

    const os = new OnScreen();

    os.on('enter', '.animation-container', (element, event) => {
      anim.playSegments(
        [
          [0, 30],
          [30, 300]
        ],
        true
      );// Play parts and loop end of animation
      anim.setSpeed(0.8); // Set the speed of the animation
      // anim.play(); Use if not playing segments
    });

    // os.on('leave', '.animation-container', (element, event) => {
    //   anim.goToAndStop(0);
    // });

    return () => {
      anim.destroy();
     } // optional clean up for unmounting
    }, []);

    return (
      <div style={{ maxWidth: '700px', marginTop: '2em', width: '100%' }} className="animation-container" ref={lottieAnimationName} />
    )
}
export default YourAwesomeAnimation;
```

## Tutorials

One of the best tutorials that I have found to be the most helpful in working with Lottie and Gatsby is ([TrongAwesome's](https://trongnguyen.co/a-complete-guide-for-lottie-animation-from-designing-to-implementing-on-the-web-with-gatsbyjs)) write up.
