var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipeDirection = "";
var swipe = "false";

document.addEventListener("touchstart", function(e) {
    //log x & y start points
    // console.log("x Start: " + e.changedTouches[0].screenX);
    // console.log("y Start: " + e.changedTouches[0].screenY);
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", function(e) {
    // log X & X end points
    // console.log("x End: " + e.changedTouches[0].screenX);
    // console.log("y End: " + e.changedTouches[0].screenY);
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    checkSwipe();
});

// check if the sipmple direction of the swipe and if user has swiped

function checkSwipe() {
    var x = touchstartX - touchendX;
    var y = touchstartY - touchendY;
    console.log(x, y);

    if (x > 100) {
        swipe = true;
        swipeDirection = "left";
    } else if (x < -100) {
        swipe = true;
        swipeDirection = "right";
    } else if (y > 100) {
        swipe = true;
        swipeDirection = "up";
    } else if (y < -100) {
        swipe = true;
        swipeDirection = "down";
    } else {
        swipe = false;
    }
    console.log(swipe, swipeDirection);
}
