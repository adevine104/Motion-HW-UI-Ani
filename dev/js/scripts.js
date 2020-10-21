
import {gsap} from "gsap";

import {sunAnimation} from "./sun.js"
// import {blah} from "./click-hover.js"
import {hoverMovingTimeLine} from "./click-hover.js"
// import {hideShowPopup} from "./popup/popup.js";
// import {hideShowPopup} from "./popup/upload-click.js";


const mainTL = gsap.timeline({paused:true});
    
    mainTL.add(hoverMovingTimeLine())
    mainTL.add(sunAnimation());
    // mainTL.add(blah(),"startAll")
    

        // .play();


        // sunAnimation();
        // hoverMovingTimeLine();
        // raysAnimation();

    //         $("#sunandmoon").click(function(){
    //     //if an animation is currently running reverse it.
    //     if (tl) {
    //         tl.play();
    //     }else{
    //         tl.play();
    //     }
        
    //     //set the currentAnimation to whatever this button's assigned animation is
    //     tl = this.animation;
    //     //play the animation
    //     this.animation.play(0)
    // })


    // var toggles = false;

    // // const mainTL = gsap.timeline({paused:true});
    // // gsap.add(sunAnimation());
    
    // $("#sunandmoon").on("click", function () {
         
       
    //     console.log("working");
    //     if(toggles === false){
    
    //         sunAnimation.play();
    //         toggles = true;
    //     }
        
    // })