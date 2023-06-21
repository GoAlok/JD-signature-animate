// i need to get current position of the mouse every time it moves (x-axis, y-axis,)


// i need to set those x and y values to circular div

// ================================================

//  => every time mouse move we should get notified = mouseMove listener.

//  => every time listener gets notified, we need to get ht values for x and y and then update to circle.

let circle = document.querySelector("#circle");
const btn = document.querySelector("#btn")
const svgEle = document.querySelector("svg")

// GSAP Animation
// ----------
const timeline = gsap.timeline();
// ----------

window.addEventListener("mousemove", function(details){
    let xValue = details.clientX
    let yValue = details.clientY
    
    this.setTimeout(function(){
        circle.style.top = yValue + "px";
        circle.style.left = `${xValue}px`;
    }, 100)
})

// GSAP Animation

btn.addEventListener("click", function(){
    timeline.reverse()
    setTimeout(function(){
        svgEle.classList.add(`animate`);
    }, 4500)
})


timeline.from(".wrapper ", {
    duration: 4,
    scale: .7,
    ease: "Expo.easeInOut",
    opacity: 0,
})

.from(".white-strip", {
    duration: 2,
    width: 0,
    ease: "Expo.easeInOut",
}, "-=2.5")

.from(".black-card", {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: "Expo.easeInOut",
}, "-=1")

.from(".line-element", {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: "Expo.easeInOut",
}, "-=1")

.from(".line-element .line", {
    duration: 2,
    width: 50,
    opacity: 0,
    ease: "Expo.easeInOut",
}, "-=1")

.from(".black-card p", {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
}, "-=2")

.from("#sideelem", {
    duration: 2.5,
    x: 30,
    opacity: 0,
    ease: "Expo.easeInOut",
}, "-=2")



