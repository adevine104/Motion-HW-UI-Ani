import {gsap} from "gsap";
// import {} from "./click-hover.js"
// import {smileySpeed2} from "./animationSpeed.js"

export function sunAnimation(){

    var tl = gsap.timeline({paused: true});


    tl.to("#rays", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.2,
        rotate: 10
    }, "play");

    tl.to("#sun-center", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.1,
        rotate: 10
    }, "play");

    tl.to("#sun-center", {
        duration: 1,
        transformOrigin: "center",
        scale: 1,
        rotate: -10
    }, "play1");

    tl.to("#rays", {
        duration: 2,
        transformOrigin: "center",
        scale: 1,
        rotate: -10
    }, "play1");

    tl.to("#rays", {
        duration: 1,
        transformOrigin: "center",
        scale: 0,
        alpha:0
    }, "play1");

    tl.to("#sun-center", {
        duration: .5,
        scale:0,
        alpha: 0
    }, "play1");

    tl.to("#moon-crescent", {
        duration: .25,
        display:'block',
        scale:0,
        transformOrigin: "center"
    }, "play2");

    tl.from("#moon-crescent", {
        duration: .25,
        scale:0,
        transformOrigin: "center"
    }, "play2");

    tl.to("#section-1", {
        duration: .5,
        backgroundColor: "#2F303F"
    }, "play2");

    tl.to("#moon-crescent", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.2,
        rotate: 10
    }, "play2");

    tl.to("#moon-crescent", {
        duration: 1,
        transformOrigin: "center",
        scale: 1,
        rotate: -10
    }, "play4");

    // if (tl.play()) {
    //     tl.play();
    // } else {
    //     tl.reverse();
    // }

    return tl;

}



