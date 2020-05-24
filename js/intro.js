{
  const DOM = {};
  DOM.intro = document.querySelector(".content--intro");
  //   DOM.shape = DOM.intro.querySelector("svg.shape");
  //   DOM.path = DOM.shape.querySelector("path");
  DOM.enter = document.querySelector(".enter");
  charming(DOM.enter);
  // Set the SVG transform origin.
  //   DOM.shape.style.transformOrigin = "50% 0%";

  const init = () => {
    DOM.enter.addEventListener("click", navigate);
    DOM.enter.addEventListener("touchenter", navigate);
  };

  let loaded;
  const navigate = () => {
    if (loaded) return;
    loaded = true;

    anime({
      targets: DOM.intro,
      duration: 2000,
      easing: "cubicBezier(.8, .02, 0, 1)",
      translateY: "-240vh"
    });

    // anime({
    //   targets: DOM.shape,
    //   scaleY: [
    //     { value: [0.8, 1.8], duration: 550, easing: "easeInQuad" },
    //     { value: 1, duration: 550, easing: "easeOutQuad" }
    //   ]
    // });

    // anime({
    //   targets: DOM.path,
    //   duration: 1100,
    //   easing: "easeOutQuad",
    //   d: DOM.path.getAttribute("pathdata:id")
    // });
  };

  init();
}
