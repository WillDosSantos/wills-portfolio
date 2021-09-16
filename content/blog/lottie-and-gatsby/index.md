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

## Tutorials

One of the best tutorials that I have found to be the most helpful in working with Lottie and Gatsby is ([TrongAwesome's](https://trongnguyen.co/a-complete-guide-for-lottie-animation-from-designing-to-implementing-on-the-web-with-gatsbyjs)) write up.
