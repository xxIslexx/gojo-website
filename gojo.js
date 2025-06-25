gsap.registerPlugin(ScrollTrigger);

// FONCTION POUR LES ANIMATIONS POUR EVITER DE ME REPETER COMME UN CONNARD
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

    preloadImages(images);

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

// PRECHARGEMENT DES IMAGES POUR CE GROS PORC DE NETLIFY
function preloadImages(images) {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
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
  start: "top top", // ou "top 70%" selon le timing
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
  start: "top top", // ou "top 70%" selon le timing
  onEnter: () => {
    section.classList.remove("bg-transparent");
    section.classList.add("bg-black");
    gsap.to("#gojo-frame", { opacity: 1, duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to("#gojo-frame", { opacity: 0, duration: 1 });
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

const amanai_section = document.getElementById("amanai-mort");
ScrollTrigger.create({
  trigger: "#amanai-mort",
  start: "top 10%", // ou "top 70%" selon le timing
  onEnter: () => {
    amanai_section.classList.remove("bg-transparent");
    amanai_section.classList.add("bg-black");
    gsap.to("#gojo-frame", { opacity: 0, duration: 1 });
  },
  onLeaveBack: () => {
    amanai_section.classList.remove("bg-black");
    amanai_section.classList.add("bg-transparent");
    gsap.to("#gojo-frame", { opacity: 1, duration: 1 });
  }
});

ScrollTrigger.create({
  trigger: "#gojo-trigger2",
  start: "top top", // ou "top 70%" selon le timing
  onEnter: () => {
    amanai_section.classList.remove("bg-transparent");
    amanai_section.classList.add("bg-black");
    gsap.to("#gojo-frame2", { opacity: 1, duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to("#gojo-frame2", { opacity: 0, duration: 1 });
  }
});

createFrameScrollAnimation({
  frameCount: 37,
  prefixe: "./vid3/Gojo Satoru Twixtor Clips Season 2 I 4K_",
  imageId: "gojo-frame2",
  tstart: "#gojo-trigger2 top",
  tend: "300 top",
  trigger: "#gojo-trigger2"
});

