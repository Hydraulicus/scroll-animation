const scrollTimeline = new ScrollTimeline({
  source: document.documentElement,
  scrollSource: document.getElementById("SVG_wrapper"), // For legacy implementations
  orientation: 'block',
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
        scrollTimeline
    ).play();
  }

  main() {
    const DURATION = 1;

    const commonProps = {
      duration: DURATION,
      fill: "both",
      easing: "ease-in-out",
      timeline: scrollTimeline,
      rangeStart: "cover 0%",
      rangeEnd: "cover 25%",
    }

    /** INITIAL CONSULTATION , DISCOVERY CALL */
    document.getElementById("b_idea").animate([
      {transform: "translate3d(0px, 0px, 0px) scale(1)" },
      {transform: "translate3d(30px, 380px, 0px) scale(0.65)" },

    ], {...commonProps,})

    document.getElementById("b_-2").animate(
        [
          {transform: "translate3d(0px, 0px, 0px) scale(1)" },
          {transform: "translate3d(15px, 260px, 0px) scale(0.75)" },
        ],
        {...commonProps,},
    );
    document.getElementById("arrow0").animate(
        [
          {transform: "translate3d(0px, 0px, 0px) scale(1)" },
          {transform: "translate3d(30px, 290px, 0px) scale(0.75)" },
        ],
        {...commonProps,},
    );
    document.getElementById("arrow1").animate(
        [
          {transform: "translate3d(0px, 0px, 0px) scale(1)" },
          {transform: "translate3d(40px, 260px, 0px) scale(0.6)" },
        ],
        {...commonProps,},
    );
    document.getElementById("arrow_to_DESIGN_SERVICE").animate(
        [
          {d: "path('M201.33,248.76 L252.61,248.76 L252.61,540 L272.71,540')"},
          {d: "path('M201.33,540 L252.61,540 L252.61,540 L272.71,540')" },
        ],
        {...commonProps},
    );
    /***/

    /** POST-INSTALL SURVEY , PHOTOGRAPH PROJECT*/
    /** POST-INSTALL SURVEY */
    const b0 = document.getElementById("b_-24");
        b0.animate(
        [
          {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial" },
          {transform: "translate3d(220px, 0px, 0px) scale(1)", display: "none"},
        ],
        {...commonProps},
    )
            // .onfinish = ()=>{b0.style.opacity = '0';};

    document.getElementById("arrow3").animate(
        [
          {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial" },
          {transform: "translate3d(130px, 0px, 0px) scale(1)", display: "none" },
        ],
        {...commonProps},
    );
    /***/
      /** PHOTOGRAPH PROJECT */
      document.getElementById("b_-23").animate(
          [
              {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial" },
              {transform: "translate3d(0px, -470px, 0px) scale(1)", display: "none"},
          ],
          {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
      )
      // .onfinish = ()=>{b0.style.opacity = '0';};

      document.getElementById("arrow-PHOTOGRAPH-PROJECT").animate(
          [
              {transform: "translate3d(0px, 0px, 0px) scale(1, 1)" },
              {transform: "translate3d(0px, 500px, 0px) scale(1, 0.05)" },
          ],
          {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
      );
      /***/
    /***/

    /** CONCEPTUAL DESIGN PRESENTATION */
    document.querySelector("#b_scanspace-3 rect:first-child").animate(
        [
          {fill: "#ffffff" },
          {fill: "#ff8d0e"},
        ],
        {...commonProps},
    )
    /***/

      /** DESIGN PRESENTATION, CLIENT INPUT*/
      document.querySelectorAll("#b_-27, #b_-28, #arrow_to_CLIENT_INPUT, #arrow_to_DESIGN_PRESENTATION")
          .forEach((el) => el.animate(
          [
              {transform: "translate3d(0px, 0px, 0px) scale(1)"},
              {transform: "translate3d(190px, 0px, 0px) scale(1)"},
          ],
          {...commonProps},
      )
      )

      document.getElementById("arrow_to_SOURCING_SELECTING").animate(
          [
              {d: "path('M411.27,957.52 L411.27,803.42 L654.95,803.42')"},
              {d: "path('M601.27,957.52 L601.27,803.42 L654.95,803.42')" },
          ],
          {...commonProps},
      );
      /***/
      // document.getElementById("b_-23").animate(
      //     [
      //         {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial" },
      //         {transform: "translate3d(0px, -470px, 0px) scale(1)", display: "none"},
      //     ],
      //     {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
      // )
      // // .onfinish = ()=>{b0.style.opacity = '0';};
      //
      // document.getElementById("arrow-PHOTOGRAPH-PROJECT").animate(
      //     [
      //         {transform: "translate3d(0px, 0px, 0px) scale(1, 1)" },
      //         {transform: "translate3d(0px, 500px, 0px) scale(1, 0.05)" },
      //     ],
      //     {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
      // );
      /***/
      /***/
  }
}

const scrollAnimation = new ScrollAnimation();

// window.addEventListener('resize', function (event) {
//   morphAnimation.main();
// });

scrollAnimation.init({})
    .then(scrollAnimation.progressBar)
    .then(scrollAnimation.main)
