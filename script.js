function Loading() {
  const tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.8,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );

  // tl.to('.yellow2',{
  //     top:"100%",
  //     delay:0.6,
  //     duration:0.5,
  //     ease:"expo.out",
  // })

  tl.to(
    ".loader h1",
    {
      duration: 0.5,
      delay: 0.8,
      color: "black",
    },
    "anim"
  );

  tl.to(".loader", {
    opacity: 0,
    display: "none",
  });
}
Loading();
function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  const page2 = document.querySelector(".page2");
  const elems = document.querySelectorAll(".elem");
  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      const elemimg = elem.getAttribute("data-img");
      page2.style.backgroundImage = `url(${elemimg})`;
    });
  });

  document.querySelector(".footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });
}
loco();

const ball=document.querySelector('.movingball');
console.log(ball);


document.addEventListener('mousemove', (event) => {
  // Update the position of the element to follow the mouse cursor
  ball.style.left = event.pageX + 'px';
  ball.style.top = event.pageY + 'px';
})
