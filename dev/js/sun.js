import {gsap} from "gsap";
// import {smileySpeed} from "./animationSpeed.js"
// import {smileySpeed2} from "./animationSpeed.js"

export function sunAnimation(){

    var tl = gsap.timeline({});


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
        duration: 2,
        transformOrigin: "center",
        scale: .1,
        alpha:0
    }, "play1");

    tl.to("#sun-center", {
        duration: 1,
        alpha: 0
    }, "play2");

    tl.to("#moon-crescent", {
        duration: .5,
        display:'block'
    }, "play2");

    tl.to("#section-1", {
        duration: 1,
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

    return tl;

}


// var raysMovingTimeLine = gsap.timeline({
//     paused: true
// });

// export function raysAnimation(){
//     raysMovingTimeLine.to("#rays",{transformOrigin:"center", duration:.5, rotation: 360}, "start")
// }


//   $("#sunandmoon").on("mouseenter", function(){
//     //console.log("mouse enter");
//     //console.log(canYouSeeTheMenu + " menu visible");
//     if(raysMovingTimeLine){
//         //console.log("burger to arrow");
//         raysMovingTimeLine.play();
//     }else(
//         raysMovingTimeLine.reverse()
//     )
// })

// $("#sunandmoon").on("mouseleave", function(){
//     if(raysMovingTimeLine){
//         //console.log("arrow to buer");
//         raysMovingTimeLine.reverse();
        
//     }
// })