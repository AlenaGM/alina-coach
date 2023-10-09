/* eslint-disable no-undef */
window.addEventListener("DOMContentLoaded", () => {
  animate();
});

function animate() {
  gsap.registerPlugin(ScrollTrigger);

  let mediaAnimation = gsap.matchMedia();

  mediaAnimation.add("(min-width: 1025px)", () => {
    const preloaderPath = document.querySelector("path");
    const svgPreload = document.querySelector("svg");
    const pathLength = preloaderPath.getTotalLength();

    gsap.set(svgPreload, {
      opacity: 0,
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tlPreloader = gsap.timeline({});

    tlPreloader
      .to(".preloader__title", {
        opacity: 1,
      })
      .to(svgPreload, {
        opacity: 1,
      })
      .to(svgPreload, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power1.in",
      })
      .to(
        ".preloader",
        {
          duration: 0.6,
          xPercent: 100,
          ease: "power3.in",
        },
        "+=0.5"
      )
      .to(".preloader", {
        display: "none",
      });

    gsap.set(".about__bg", {
      yPercent: 20,
    });

    gsap.set(".about__wrapper", {
      yPercent: 200,
    });

    const tlPromo = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "bottom+=100%",
        pin: true,
        scrub: 1,
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });

    tlPromo
      .to(".about__bg", {
        yPercent: 0,
      })
      .to(
        ".about__inner",
        {
          width: "100%",
          height: "100%",
        },
        "<"
      )
      .to(
        ".about__decor",
        {
          opacity: 0,
        },
        "<"
      )
      .to(
        ".about__wrapper",
        {
          yPercent: 0,
        },
        "<"
      );

    const tlAim = gsap.timeline({
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".aim",
        start: "top top",
        end: "bottom+=120%",
        pin: true,
        scrub: 1,
      },
    });

    tlAim
      .to(
        ".aim__first",
        {
          xPercent: -100,
        },
        "0.5"
      )
      .to(
        ".aim__second",
        {
          xPercent: -100,
        },
        "<"
      )
      .from(".aim__text", {
        autoAlpha: 0,
        yPercent: 100,
      })
      .from(".experience__item", {
        autoAlpha: 0,
        stagger: 0.2,
      })
      .to(".experience__border", {
        width: "100%",
      });

    const tlEducation = gsap.timeline({
      repeat: -1,
    });

    tlEducation
      .from(".education__item", {
        duration: 1,
        yPercent: 100,
        autoAlpha: 0,
        stagger: 2,
      })
      .to(
        ".education__item",
        {
          duration: 1,
          yPercent: -100,
          stagger: 2,
        },
        2
      );

    gsap.set(".training__item:first-child", {
      xPercent: 110,
    });

    gsap.set(".training__item:nth-child(2)", {
      xPercent: 120,
    });

    gsap.set(".training__item:nth-child(3)", {
      xPercent: 130,
    });

    gsap.set(".training__item:nth-child(4)", {
      xPercent: 140,
    });

    gsap.set(".training__title", {
      xPercent: 100,
    });

    const tlResults = gsap.timeline({
      paused: true,
    });

    tlResults
      .from(".results__item", {
        xPercent: 100,
        autoAlpha: 0,
        stagger: 1,
      })
      .to(
        ".results__item:not(:last-child)",
        {
          xPercent: -100,
          stagger: 1,
        },
        1
      );

    const tlTraining = gsap.timeline({
      paused: true,
    });

    tlTraining
      .to(".results", {
        xPercent: -100,
      })
      .to(
        ".training__item",
        {
          xPercent: 0,
        },
        "<"
      )
      .to(
        ".training__title",
        {
          xPercent: 0,
        },
        "<"
      );

    const tlDouble = gsap.timeline({});

    tlDouble
      .to(tlResults, {
        duration: 0.8,
        progress: 1,
      })
      .to(tlTraining, {
        duration: 0.6,
        progress: 1,
        ease: "power3.in",
      });

    ScrollTrigger.create({
      animation: tlDouble,
      trigger: ".double-section",
      start: "top top",
      end: `bottom+=${tlDouble.duration() * 4000} bottom`,
      pin: true,
      scrub: 1,
    });

    gsap.to(".reviews", {
      yPercent: -110,
      scrollTrigger: {
        trigger: ".double-section2",
        start: "top top",
        bottom: "bottom+=70%",
        scrub: 1,
        pin: true,
      },
    });
  });

  mediaAnimation.add("(max-width: 1024px)", () => {
    const preloaderPath = document.querySelector("path");
    const svgPreload = document.querySelector("svg");
    const pathLength = preloaderPath.getTotalLength();

    gsap.set(svgPreload, {
      opacity: 0,
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tlPreloader = gsap.timeline({});

    tlPreloader
      .to(".preloader__title", {
        opacity: 1,
      })
      .to(svgPreload, {
        opacity: 1,
      })
      .to(svgPreload, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power1.in",
      })
      .to(
        ".preloader",
        {
          duration: 0.6,
          xPercent: 100,
          ease: "power3.in",
        },
        "+=0.5"
      )
      .to(".preloader", {
        display: "none",
      });

    gsap.from(".aim__text", {
      duration: 0.8,
      autoAlpha: 0,
      yPercent: 100,
      scrollTrigger: {
        trigger: ".aim__text",
        start: "top 70%",
      },
    });

    const tlAim = gsap.timeline({
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".experience",
        start: "top 70%",
      },
    });

    tlAim
      .from(".experience__item", {
        autoAlpha: 0,
        stagger: 0.2,
      })
      .to(".experience__border", {
        width: "100%",
      });

    const tlEducation = gsap.timeline({
      repeat: -1,
    });

    tlEducation
      .from(".education__item", {
        duration: 1,
        yPercent: 100,
        autoAlpha: 0,
        stagger: 2,
      })
      .to(
        ".education__item",
        {
          duration: 1,
          yPercent: -100,
          stagger: 2,
        },
        2
      );

    const results = document.querySelectorAll(".results__item");

    results.forEach((item) => {
      gsap.from(item, {
        autoAlpha: 0,
        //yPercent: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
}
