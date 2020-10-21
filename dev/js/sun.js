import {gsap} from "gsap";
// import {} from "./click-hover.js"
// import {smileySpeed2} from "./animationSpeed.js"

export function sunAnimation(){

    var sunAnimation = gsap.timeline({paused:true});

    sunAnimation.addLabel("sunTurnsToMoon")
    .to("#rays", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.2
    }, "play")

    .to("#sun-center", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.1
    }, "play")

    .to("#sun-center", {
        duration: 1,
        transformOrigin: "center",
        scale: 1
    }, "play1")

    .to("#rays", {
        duration: 2,
        transformOrigin: "center",
        scale: 1
    }, "play1")

    .to("#rays", {
        duration: 1,
        transformOrigin: "center",
        scale: 0,
        alpha:0
    }, "play1")

    .to("#sun-center", {
        duration: .5,
        scale:0,
        alpha: 0
    }, "play1")

    .to("#moon-crescent", {
        duration: .25,
        display:'block',
        scale:0,
        transformOrigin: "center"
    }, "play2")

    .from("#moon-crescent", {
        duration: .25,
        scale:0,
        transformOrigin: "center"
    }, "play2")

    .to("#section-1", {
        duration: .5,
        backgroundColor: "#2F303F"
    }, "play2")

    .to("#moon-crescent", {
        duration: 1,
        transformOrigin: "center",
        scale: 1.2,
        rotate: 10
    }, "play2")

    .to("#moon-crescent", {
        duration: 1,
        transformOrigin: "center",
        scale: 1,
        rotate: -10
    }, "play4")

    // if (tl.play()) {
    //     tl.play();
    // } else {
    //     tl.reverse();
    // }

    // return sunAnimation;

    var toggles = false;

    // const mainTL = gsap.timeline({paused:true});
    // gsap.add(sunAnimation());
    
    $("#sunandmoon").on("click", function () {
         
       
        console.log("working");
        if(toggles === false){
    
            sunAnimation.play();
            toggles = true;
        }
        
    })

}

// var tl = gsap.timeline({paused: true});

//   triggerHeart.add(heartPanda());

// handle1.on("click", function(e) {
//     e.preventDefault();
//     triggerLaser.restart();
//   });
