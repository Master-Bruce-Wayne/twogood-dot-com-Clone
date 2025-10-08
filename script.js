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
        // const rect = videoCont.getBoundingClientRect();
        // const x = e.clientX - rect.left;
        // const y = e.clientY - rect.top;
        // playBtn.style.left = `${x}px`;
        // playBtn.style.top = `${y}px`;
        gsap.to(playBtn, {
            left:e.x-30,
            top:e.y-25
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
}
loadingAnimation()
