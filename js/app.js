const myScrollTimeline = new ScrollTimeline({
  source: document.documentElement,
  scrollSource: document.scrollingElement, // For legacy implementations
  orientation: 'block',
  scrollOffsets: [
    new CSSUnitValue(0, 'percent'),
    new CSSUnitValue(100, 'percent'),
    //     new CSSUnitValue(50, 'percent'),
    //     new CSSUnitValue(80, 'percent'),
    //     { target: document.getElementById("SVG_wrapper"), edge: 'end', threshold: 0.5 },
    //     { target: document.getElementById("SVG_wrapper"), edge: 'end', threshold: 0.75 },
  ],
});

class ScrollAnimation {
  constructor() {

    // this.iOSSafari =  isSafari();


    this.init = this.init.bind(this);
    this.main = this.main.bind(this);
    this.progressBar = this.progressBar.bind(this);

  }

  async init ({src = "img/state_initial.svg"}) {
    const SVG_wrapper = document.getElementById("SVG_wrapper");
    await injectSVG({ src, el: SVG_wrapper, });
    return new Promise((resolve) => resolve());
  }

  progressBar() {
    new Animation(
        new KeyframeEffect(
            document.querySelector('#progress'),
            { transform: ['scaleX(0)', 'scaleX(1)'], },
            { duration: 1, fill: 'forwards' }
        ),
        myScrollTimeline
    ).play();

  }

  main() {
    // const myScrollTimeline = new ScrollTimeline({
    //   source: document.documentElement,
    //   orientation: 'block',
    //   scrollOffsets: [
    //     new CSSUnitValue(50, 'percent'),
    //     new CSSUnitValue(80, 'percent'),
    //   ],
    // });

    const images = document.querySelectorAll("#b_idea");

    images.forEach((image) => {
      image.animate(
          {
            // opacity: [0.05, 1],
            transform: ['translateY(0px)', `translateY(${350}px)`],
            // transform: ['translateX(0)', 'translateX(50)'],
            // clipPath: ['inset(45% 20% 45% 20%)', 'inset(0% 0% 0% 0%)'],
          },
          {
            duration: 1,
            fill: "both",
            // timeline: new ScrollTimeline({
            //   scrollSource: document.documentElement,
            //   timeRange: 1,
            //   fill: "both",
            //   scrollOffsets: [
            //     { target: image, edge: 'end', threshold: 0.5 },
            //     { target: image, edge: 'end', threshold: 0.75 },
            //   ],
            // }),
            timeline: myScrollTimeline
          }
      );
    });


  }
}

const scrollAnimation = new ScrollAnimation();

// window.addEventListener('resize', function (event) {
//   morphAnimation.main();
// });

scrollAnimation.init({})
    // .then(scrollAnimation.progressBar)
    // .then(scrollAnimation.main)

// var div = document.querySelector("#SVG_wrapper");
// var div_status = document.querySelector("#div_status");
// var start = 800;
// var stop = 1400;
// var swap = false;
//   var rect = div.getBoundingClientRect();
//   console.log(rect, div)
// window.addEventListener("scroll", function() {
//   var y = window.scrollY
//   const top = div.getBoundingClientRect().top + document.documentElement.scrollTop - div.ownerDocument.documentElement.clientTop
//   console.log(y,  'top=', top)
//   div_status.innerText = rect.top.toFixed() + " " + y.toFixed()
//   div.classList.toggle("sticky", (y > top) && (y < top+100));
//
//   // if (y >= top && y <= top+200) {
//   //   console.log(' add ')
//   //   div.classList.add("sticky")
//   // } else {
//   //   console.log(' remove ')
//   //   div.classList.remove("sticky")
//   // }
//
//
//   // if (y >= start && y <= stop) {
//   //
//   //   div_status.style.background = "green"
//   //   if (!swap) {
//   //     div.style.position = "fixed";
//   //
//   //     div.style.top = rect.top + "px"
//   //     swap = true
//   //   }
//   // } else {
//   //   div_status.style.background = "red"
//   //   if (swap) {
//   //
//   //     div.style.position = "absolute";
//   //     div.style.top = (y + rect.top) + "px"
//   //     swap = false;
//   //   }
//   //
//   // }
// })

const scrollable = document.querySelector('.scrollable');
const stickyProject = document.querySelector('.project');
let current = 0;
let target = 0;
const ease = 0.1;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

function smoothScroll() {
  target = window.scrollY;
  current = lerp(current, target, ease);
  if (Math.abs(current) >= 1) {
    scrollable.style.transform = `translate3d(0, ${-current }px, 0)`;
  }
  sticky();
  window.requestAnimationFrame(smoothScroll);
}

function sticky() {
  let offset = window.innerHeight
  console.log(' current=', current, ' offset=', offset);
  if (current < offset) {
    stickyProject.style.transform = `translate3d(0, 0, 0)`;
  }
  if (current >= offset) {
    stickyProject.style.transform = `translate3d(0, ${current - offset}px, 0)`;
  }
}

init()
smoothScroll()

