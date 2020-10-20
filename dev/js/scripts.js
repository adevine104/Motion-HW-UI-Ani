
import {gsap} from "gsap";

import {sunAnimation} from "./sun.js"
// import {sunAnimation} from "./popup/popup.js";
// import {sunAnimation} from "./popup/upload-click.js";
// import {shadowAnimation} from "./floor-shadow.js"


const mainTL = gsap.timeline({paused:true});

    mainTL.add(sunAnimation(),"startAll")
        // .add(shadowAnimation(),"startAll")
        .play();


        // sunAnimation();
        // hideShowPopup();
        // raysAnimation();