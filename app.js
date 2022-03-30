//page 1 and 2
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "110%",
    scrub: true,
    markers: { startColor: "white", endColor: "white" },
    // pin: true,
  },
});
tlVideo.fromTo(".product__video", { currentTime: 0 }, { currentTime: 6 });

const tlInfo = gsap.timeline({
  scrollTrigger: {
    trigger: ".product-info-container",
    start: "-70%",
    end: "-10%",
    scrub: true,

    markers: { startColor: "white", endColor: "white" },
  },
});
tlInfo.fromTo(".product-info-container", { opacity: 0 }, { opacity: 1 });

const tlProduct = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "10%",
    end: "20%",
    scrub: true,
    pin: true,

    markers: { startColor: "white", endColor: "white" },
  },
});
tlProduct.fromTo(".product", { opacity: 0 }, { opacity: 1, duration: 1 });
