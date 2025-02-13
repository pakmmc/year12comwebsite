var STEP = 1;

function startUpProc(id)
{
    console.log("Running");
    var log = window.document.getElementById(id);
    // initialized to 0 in changeRotate
    makeCircle(log, 0);
}

function changeRotate(item, val)
{
    item.style.transform = "rotate(" + val + "deg)";
    item.style.webkitTransform = "rotate(" + val + "deg)";
    item.style.mozTransform = "rotate(" + val + "deg)";
    //alert(item.style.transform);
}

function makeCircle(item, targetAngle) {
    changeRotate(item, targetAngle);

    if (targetAngle < 360) {
        setTimeout(function (){
            makeCircle(item, targetAngle + STEP);
        }, 100);
    }
}

let heading = document.getElementById('gradient-heading');

heading.addEventListener('mousemove', event => {

    heading.style.backgroundImage = `radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, lightgreen, aqua)`;
    heading.style.webkitBackgroundClip = 'text';
    heading.style.color = 'transparent';

});	

heading.addEventListener('mouseleave', function() {
    heading.style.color = 'black';

});
