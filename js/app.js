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

    /** DESIGN SERVICE, CONCEPTUAL DESIGN PRESENTATION, FINAL INVOiCES, FINAL DESIGN */
    document.querySelectorAll("#b_scanspace rect:first-child, #b_scanspace-3 rect:first-child, #b_-8 rect:first-child, #b_-15 rect:first-child")
        .forEach((el) =>el.animate(
        [
          {fill: "#ffffff" },
          {fill: "#11800e"},
        ],
        {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 75%"},
    )
        )

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

      /** BUDGET ESTIMATE*/
      document.querySelectorAll("#b_")
          .forEach((el) => el.animate([
              {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
              {transform: "translate3d(420px, 0px, 0px)", display: "initial"},
              {transform: "translate3d(420px, 330px, 0px)", display: "none"},
          ],
          {...commonProps, rangeEnd: "cover 30%"},
      ));

      document.querySelector("#arrow_to_BUDGET_ESTIMATE path").animate(
          [
              {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(300px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(300px, 0px, 0px)", opacity: 0, display: "initial"},
              {transform: "translate3d(320px, 0px, 0px)", opacity: 0, display: "none"},          ],
          {...commonProps, rangeEnd: "cover 25%"},
      );
      document.querySelector("#arrow_to_BUDGET_ESTIMATE polyline").animate(
          [
              {clipPath: 'inset(0 0 0 0)', display: "initial"},
              {clipPath: 'inset(0 0 0 95% )', display: "initial"},
              {clipPath: 'inset(100% 0  0 100%)', display: "initial"},
          ],
          {...commonProps, rangeEnd: "cover 30%"},
      );
      /***/

      /** SPECIFICATION NOTEBOOK, BUDGET UPDATE */
      document.querySelector("#b_-10").animate([
              {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(0px, 112px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(265px, 112px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(265px, 112px, 0px)", opacity: 0, display: "none"},
          ], {...commonProps, rangeEnd: "cover 50%"},
      )
      document.querySelector("#b_-11").animate([
          {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
          {transform: "translate3d(0px, 128px, 0px)", opacity: 1, display: "initial"},
          {transform: "translate3d(228px, 128px, 0px)", opacity: 1, display: "initial"},
          {transform: "translate3d(228px, 128px, 0px)", opacity: 0, display: "none"},
          ], {...commonProps, rangeEnd: "cover 50%"},
      )
      document.querySelectorAll("#peak_to_SPECIFICATION_NOTEBOOK, #peak_to_BUDGET_UPDATE")
          .forEach((el) => el.animate(
          [
              {opacity: 1, display: "initial"},
              {opacity: 0, display: "none"},
          ],
          {...commonProps},
      ))


      document.querySelectorAll("#arrow_to_SPECIFICATION_NOTEBOOK path, #arrow_to_BUDGET_UPDATE path")
          .forEach((el) => el.animate(
              [
                  {opacity: 1, display: "initial"},
                  {opacity: 0, display: "none"},
              ],
              {...commonProps},
          ))
      document.querySelectorAll("#arrow_to_SPECIFICATION_NOTEBOOK, #arrow_to_BUDGET_UPDATE")
          .forEach((el) => el.animate(
              [
                  {clipPath: 'inset(0 0 0 0)', display: "initial"},
                  {clipPath: 'inset(50% 0 0 0)', display: "initial"},
                  {clipPath: 'inset(50% 0 0 15%)', display: "none"},
              ],
              {...commonProps},
          ))
      /***/
      /** SITE SURVEY, RESEARCH, CONCEPTUAL DESIGN PRESENTATION, PRELIMINARY DRAWINGS */
      document.querySelector("#b_-30").animate([
              {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-131px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-131px, -156px, 0px)", opacity: 1, display: "none"},
          ], {...commonProps, rangeEnd: "cover 25%"},
      )
      document.querySelector("#b_research").animate([
              {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-131px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-131px, 220px, 0px)", opacity: 1, display: "none"},
          ], {...commonProps, rangeEnd: "cover 25%"},
      )
      document.querySelectorAll("#b_scanspace-3, #arrow_to_CONCEPTUAL_DESIGN_PRESENTATION")
          .forEach((el) => el.animate([
              {transform: "translate3d(0px, 0px, 0px)"},
              {transform: "translate3d(0, -50px, 0px)"},
          ], {...commonProps,  rangeEnd: "cover 25%"},
      ))
      document.querySelectorAll(" #b_-6")
          .forEach((el) => el.animate([
              {transform: "translate3d(0px, 0px, 0px)"},
              {transform: "translate3d(-140px, 0px, 0px)"},
              {transform: "translate3d(0px, 0px, 0px)"},
              {transform: "translate3d(0, -50px, 0px)"},
          ], {...commonProps, rangeEnd: "cover 50%"},
      ))
      document.querySelectorAll("#arrow_to_PRELIMINARY_DRAWINGS")
          .forEach((el) => el.animate([
              {transform: "translate3d(0px, 0px, 0px)"},
              {transform: "translate3d(0, -50px, 0px)"},
          ], {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%"},
      ))
      document.querySelectorAll("#arrow_to_SITE_SURVAEY path, #arrow_to_REASERCH path")
          .forEach((el) => el.animate(
          [
              {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-23px, 0px, 0px)", opacity: 1, display: "initial"},
              {transform: "translate3d(-23px, 0px, 0px)", opacity: 0, display: "none"},
          ],
          {...commonProps, rangeEnd: "cover 10%"},
      ))
      document.querySelector("#arrow_to_REASERCH polyline").animate([
                  {clipPath: 'inset(0 0 0 0)', display: "initial"},
                  {clipPath: 'inset(0% 75% 0 0)', display: "initial"},
                  {clipPath: 'inset(100% 100% 0 0)', display: "none"},
              ],
              {...commonProps, rangeEnd: "cover 22%"},
          )
      document.querySelectorAll("#arrow_to_SITE_SURVAEY polyline:first-child")
          .forEach((el) => el.animate(
              [
                  {clipPath: 'inset(0 0 0 0)', display: "initial"},
                  {clipPath: 'inset(0 50% 0 0)', display: "initial"},
                  {clipPath: 'inset(0 50%  100% 0)', display: "none"},
              ],
              {...commonProps, rangeEnd: "cover 22%"},
          ))
      document.querySelector("#line_RESERCH_SITE_SURVAEY").animate([
              {d: "path('M628.59,324.26 L666.03,324.26 L666.03,698.16 L628.59,698.03')"},
              {d: "path('M490,324.26 L666.03,324.26 L666.03,698.16 L490,698.03')"},
              {d: "path('M498.59,542 L666.03,542 L666.03,542 L490,542')" },
              ],
              {...commonProps, rangeEnd: "cover 25%"},
          )
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
