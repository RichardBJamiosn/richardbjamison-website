$(document).ready(function () {
  $(".slider-before").slick();

  let clientX = -100;
  let clientY = -100;
  const cursorArrow = document.querySelector(".cursor-arrow");
  const initCursor = () => {
    document.addEventListener("mousemove", (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    const render = () => {
      TweenMax.to(cursorArrow, {
        duration: 0.3,
        x: clientX,
        y: clientY,
        ease: Power2.easeOut
      });
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  initCursor();

  const slickPrev = document.querySelector(".slick-prev");
  const slickNext = document.querySelector(".slick-next");

  slickPrev.addEventListener("mouseenter", () => {
    cursorArrow.classList.add("cursor-prev");
    cursorArrow.classList.remove("cursor-next");
  });
  slickNext.addEventListener("mouseenter", () => {
    cursorArrow.classList.add("cursor-next");
    cursorArrow.classList.remove("cursor-prev");
  });

  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseenter", () => {
    cursorArrow.classList.add("cursor-show");
  });
  slider.addEventListener("mouseleave", () => {
    cursorArrow.classList.remove("cursor-show");
  });
})



$(".slider-after").slick();

let clientX = -100;
let clientY = -100;
const cursorArrow = document.querySelector(".cursor-arrow-after");
const initCursor = () => {
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    TweenMax.to(cursorArrow, {
      duration: 0.3,
      x: clientX,
      y: clientY,
      ease: Power2.easeOut
    });
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

const slickPrev = document.querySelector(".slick-prev");
const slickNext = document.querySelector(".slick-next");

slickPrev.addEventListener("mouseenter", () => {
  cursorArrow.classList.add("cursor-prev");
  cursorArrow.classList.remove("cursor-next");
});
slickNext.addEventListener("mouseenter", () => {
  cursorArrow.classList.add("cursor-next");
  cursorArrow.classList.remove("cursor-prev");
});

const slider = document.querySelector(".slider-after");
slider.addEventListener("mouseenter", () => {
  cursorArrow.classList.add("cursor-show");
});
slider.addEventListener("mouseleave", () => {
  cursorArrow.classList.remove("cursor-show");
});