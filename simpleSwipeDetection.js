var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipeDirection = "";
var swipe = "false";

document.addEventListener("touchstart", function(e) {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", function(e) {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    checkSwipe();
});

function checkSwipe() {
    var x = touchstartX - touchendX;
    var y = touchstartY - touchendY;

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
}
