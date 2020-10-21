
// import {} from "./sun.js"


export function tl(){

$("#sunandmoon").click(function(){
    //if an animation is currently running reverse it.
    if(tl) {
        tl.play();
    }else{
        tl.play();
    }
    
    //set the currentAnimation to whatever this button's assigned animation is
    // tl = this.animation;
    //play the animation
    this.animation.play(0)
  })
}


export function hoverMovingTimeLine(){

  var hoverMovingTimeLine = gsap.timeline({
    paused: true
});



//draw svg timeline
hoverMovingTimeLine.to("#rays",{transformOrigin:"center", duration:.5, rotation: 90}, "start")
                    



  $("#sunandmoon").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(hoverMovingTimeLine){
        //console.log("burger to arrow");
        hoverMovingTimeLine.play();
    }else(
        hoverMovingTimeLine.reverse()
    )
})

$("#sunandmoon").on("mouseleave", function(){
    if(hoverMovingTimeLine){
        //console.log("arrow to burger");
        hoverMovingTimeLine.reverse();
        
    }
})

}