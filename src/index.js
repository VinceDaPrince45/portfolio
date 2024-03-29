import './style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      if (elem.classList.contains('project')) {
        elem.children[1].children[0].style.border = 'none';
        elem.children[1].children[0].style.border = '20px solid grey';
      }
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeave: function () {
      if (elem.classList.contains('project')) {
        elem.children[1].children[0].style.border = 'none'
      }
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      if (elem.classList.contains('project')) {
        elem.children[1].children[0].style.border = '20px solid grey';
      }
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
