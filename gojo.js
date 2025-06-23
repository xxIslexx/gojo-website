gsap.registerPlugin(ScrollTrigger);

function createFrameScrollAnimation({
    frameCount,
    prefixe,
    imageId,
    tstart,
    tend,
    trigger = null
}){
    const images = [];
    for (let i = 0; i < frameCount; i++) {
        const filename = `${prefixe}${i.toString().padStart(5, '0')}.png`;
        images.push(filename);
    }

    const obj = { frame: 0 };
    const imageElement = document.getElementById(imageId);

    gsap.to(obj, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: true,
            start: tstart,
            end: tend,
            trigger: trigger ?? imageElement
        },
        onUpdate: () => {
            const index = Math.floor(obj.frame);
            imageElement.src = images[index];
        }
    });
}

createFrameScrollAnimation({
  frameCount: 177,
  prefixe: "./intro/intro_",
  imageId: "gojo-frame-start",
  tstart: "top top",
  tend: "800 top",
});

const section = document.getElementById("gojo-section");

ScrollTrigger.create({
  trigger: section,
  start: "top 10%", // ou "top 70%" selon le timing
  onEnter: () => {
    section.classList.remove("bg-transparent");
    section.classList.add("bg-black");
  },
  onLeaveBack: () => {
    section.classList.remove("bg-black");
    section.classList.add("bg-transparent");
  }
});


ScrollTrigger.create({
  trigger: "#gojo-trigger",
  start: "top 15%", // ou "top 70%" selon le timing
  onEnter: () => {
    section.classList.remove("bg-black");
    section.classList.add("bg-transparent");
    gsap.to("#gojo-frame", { opacity: 1, duration: 2 });
  },
  onLeaveBack: () => {
    section.classList.remove("bg-transparent");
    section.classList.add("bg-black");
    gsap.to("#gojo-frame", { opacity: 0, duration: 2 });
  }
});

createFrameScrollAnimation({
  frameCount: 37,
  prefixe: "./vid4/vid4_",
  imageId: "gojo-frame",
  tstart: "#gojo-trigger top",
  tend: "800 top",
  trigger: "#gojo-trigger"
});

section = document.getElementById("amanai-mort");
ScrollTrigger.create({
  trigger: "#amanai-mort",
  start: "top 10%", // ou "top 70%" selon le timing
  onEnter: () => {
    section.classList.remove("bg-transparent");
    section.classList.add("bg-black");
  },
  onLeaveBack: () => {
    section.classList.remove("bg-black");
    section.classList.add("bg-transparent");
  }
});



