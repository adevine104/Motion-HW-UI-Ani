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



    var toggles = false;

    $("#sun").on("click", function () {
         
       
        console.log("working");
        if(toggles === false){
    
            sunAnimation.play();
            toggles = true;
        }
        
    })

}


export function moonAnimation(){

    var moonAnimation = gsap.timeline({paused:true});

    moonAnimation.addLabel("moonTurnsToSun")


    .to("#section-1", {
        duration: 1,
        backgroundColor: "transparent"
    }, "play22")

    .to("#moon-crescent", {
        duration: 1,
        scale:0,
        alpha:0,
        transformOrigin: "center"
    }, "play22")

    .to("#sun-center", {
        duration: 1,
        transformOrigin: "center",
        scale:1,
        alpha: 1
    }, "play11")

    .to("#rays", {
        duration: 1,
        transformOrigin: "center",
        scale: 1,
        alpha:1
    }, "play11")


    var toggles2 = false;
    
    $("#moon-crescent").on("click", function () {
         
       
        console.log("working");
        if(toggles2 === false){
    
            moonAnimation.play();
            toggles2 = true;
        }
        
    })

}