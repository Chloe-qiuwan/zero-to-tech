// import { animate, scrambleText } from 'animejs';

// (function () {
//   anime.animate(".card", {
//     opacity: [0, 1],
//     translateY: [24, 0],
//     delay: anime.stagger(120),
//     duration: 700,
//     ease: "outBack",
//   });
// })();
import { animate, scrambleText, stagger } from 'animejs';

(function () {
  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
})();
