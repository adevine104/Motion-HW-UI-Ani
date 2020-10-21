
// import {} from "./sun.js"


// export function blah(){

    // $("#sunandmoon").on("click", playAnimation);


    // function playAnimation() {
    //     var tl = document.getElementById("sunandmoon");
    
    //     if (tl) {
    
    //         tl.play();
    
    //     } else {
    
    //         tl.reverse();
    //     }
    //   }
    
    // var sunandmoon = document.querySelector('#sunandmoon');
    
    // window.onclick = function(event){
    
    //     if(event.target == sunandmoon){
            
    //         playAnimation();
    //     }
    // }

    // $("#sunandmoon").click(function(){
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
// }


export function hoverMovingTimeLine(){

  var hoverMovingTimeLine = gsap.timeline({paused:true});



//draw svg timeline
hoverMovingTimeLine.to("#rays",{transformOrigin:"center", duration:.5, scale: 1.2, rotation: 30}, "start")
                    .to("#sun-center", {duration: .5, transformOrigin: "center", scale: 1.1}, "start");
                    // .to("#rays",{transformOrigin:"center", duration:.25, rotation: -10}, "start2")
                    // .to("#rays",{transformOrigin:"center", duration:.25, rotation: 10}, "start3");
                    



  $("#sunandmoon").on("mouseenter", function(){
    // console.log("mouse enter");
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