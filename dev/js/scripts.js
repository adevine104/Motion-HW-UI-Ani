
import {gsap} from "gsap";

import {sunAnimation} from "./sun.js"
import {tl} from "./click-hover.js"
import {hoverMovingTimeLine} from "./click-hover.js"
// import {hideShowPopup} from "./popup/popup.js";
// import {hideShowPopup} from "./popup/upload-click.js";


const mainTL = gsap.timeline({paused:true});

    mainTL.add(sunAnimation(),"startAll")
    mainTL.add(tl(),"startAll")
    mainTL.add(hoverMovingTimeLine(),"startAll")

// var toggle = false;

// $("#sunandmoon").on("mouseenter", function () {
     
   
//         console.log("working");
//         if(toggle === false){
    
//             mainTL.play();
//             toggle = true;
//         }
        
// })
        // .add(shadowAnimation(),"startAll")
        .play();


        // sunAnimation();
        // hideShowPopup();
        // raysAnimation();
        