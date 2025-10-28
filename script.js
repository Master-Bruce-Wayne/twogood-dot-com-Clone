// locomotive + scrolltigger (codepen) -> 
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveAnimation()

// locomotive js code -> 
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:".main",
        markers: true,
        start:"top 0",
        end:"top -5%",
        scrub: true
    }
})

function videPlayBtnAnimation() {
    const playBtn = document.querySelector("#play");
    const videoCont = document.querySelector("#video-container");

    videoCont.addEventListener('mouseenter', function() {
        // playBtn.style.scale=1;
        // playBtn.style.opacity=1;  
        gsap.to(playBtn, {
            scale:1, 
            opacity:1
        }) 
    })

    videoCont.addEventListener('mouseleave', function() {
        // playBtn.style.scale=0;
        // playBtn.style.opacity=0;
        gsap.to(playBtn, {
            scale:0,
            opacity:0
        })
    })

    videoCont.addEventListener('mousemove', function(e) {
        // console.log("event: ", e);
        const rect = videoCont.getBoundingClientRect();
        // gets the coordinates of the videoContainer w.r.t the screen at present
        console.log("rect: ", rect);
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // playBtn.style.left = `${x}px`;
        // playBtn.style.top = `${y}px`;
        gsap.to(playBtn, {
            left:x-30,
            top:y-25
        })
    })
}
videPlayBtnAnimation()

function loadingAnimation() {
    const scrollY = window.scrollY;
    gsap.from('#page1 h1', {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger:0.5,
        immediateRender: false
        //   onStart: () => window.scrollTo(0, scrollY)
    });
    // gsap.from("#page1 #video-container", {
    //     scale:0.9,
    //     oapcity:0,
    //     delay:1.5,
    //     duration: 0.3
    // })
}
loadingAnimation()

function cursorAnimation () {
    document.addEventListener('mousemove', function(dets) {
        gsap.to('.cursor', {
            left:dets.x,
            top:dets.y,
            duration:0.5 ,
        })
    })

    document.querySelectorAll('.child').forEach(function(elem) {
        elem.addEventListener('mouseenter', function() {
            gsap.to('.cursor', {
                transform: 'translate(-50%,-50%) scale(1)'
            }) 
        })
        elem.addEventListener('mouseleave', function() {
            gsap.to('.cursor', {
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })
        
    })
}
cursorAnimation();

// function videoPlayBtnAnimation() {
//   const playBtn = document.querySelector("#play");
//   const videoCont = document.querySelector("#video-container");

//   let mouseX = 0;
//   let mouseY = 0;
//   let scrollY = 0;

//   // Track scroll position from locomotive
//   scroll.on('scroll', (obj) => {
//     scrollY = obj.scroll.y; // current scroll position in pixels
//   });

//   // Track mouse position in viewport
//   window.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   // Animate play button with corrected scroll offset
//   videoCont.addEventListener('mousemove', (e) => {
//     const rect = videoCont.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top + scrollY; // add scroll offset

//     gsap.to(playBtn, {
//       left: x - 20,
//       top: y - 20 - scrollY, // subtract scrollY back to counter translateY effect
//       duration: 0.2,
//       ease: "power2.out"
//     });
//   });

//   // Appear / disappear animation
//   videoCont.addEventListener('mouseenter', () => {
//     gsap.to(playBtn, { scale: 1, opacity: 1 });
//   });

//   videoCont.addEventListener('mouseleave', () => {
//     gsap.to(playBtn, { scale: 0, opacity: 0 });
//   });
// }
// videoPlayBtnAnimation();
