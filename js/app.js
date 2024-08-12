const scrollTimeline = new ViewTimeline({
    source: document.documentElement,
    'subject': document.getElementById("project"), // For legacy implementations
    'axis': 'block',
    // 'inset': 'auto',
    // scrollSource: document.getElementById("scrollable"), // For legacy implementations
    orientation: 'block',
    inset: [CSS.px(0), CSS.px(632)]
});
const elem = document.querySelector("#scrollable");
const rect = elem.getBoundingClientRect();
console.log(`height: ${rect.height}`, elem);
const output = document.querySelector(".output");
output.textContent += `Subject element: ${scrollTimeline.subject.nodeName}, `;
output.textContent += `start offset: ${scrollTimeline.startOffset}, `;
output.textContent += `end offset: ${scrollTimeline.endOffset}.`;


class ScrollAnimation {
    constructor() {

        // this.iOSSafari =  isSafari();


        this.init = this.init.bind(this);
        this.main = this.main.bind(this);
        // this.progressBar = this.progressBar.bind(this);

    }

    async init({src = "img/state_initial.svg"}) {
        const SVG_wrapper = document.getElementById("SVG_wrapper");
        await injectSVG({src, el: SVG_wrapper,});
        return new Promise((resolve) => resolve());
    }

    progressBar() {
        new Animation(
            new KeyframeEffect(
                document.querySelector('#progress'),
                {transform: ['scaleX(0)', 'scaleX(1)'],},
                {duration: 1, fill: 'forwards'}
            ),
            scrollTimeline
        ).play();
    }

    main() {
        const DURATION = 1;
        const animHeight = document.querySelector("#scrollable").getBoundingClientRect().height;

        /* convert percentage to tixels */
        const c = (str) => {
            const [text] = str.split('%');
            const [rangeName, val] = text.split(' ')
            return `${rangeName} ${Math.round(val * 0.01 * animHeight)}px`
        }

        const commonProps = {
            duration: DURATION,
            fill: "both",
            easing: "ease-in-out",
            timeline: scrollTimeline,
            // rangeStart: "cover 0",
            // rangeEnd: "cover 700px",
        //
        //     rangeStart: {
        //     rangeName: "cover",
        //         offset: 0,
        //         // offset: new CSSMathSum(CSS.percent(0), new CSSMathProduct(CSS.number(2), CSS.px(100))),
        // },
        //     rangeEnd:{
        //     rangeName: "cover",
        //         offset: "25%"
        //         // offset: new CSSMathSum(CSS.percent(100), CSS.px(-100)),
        // },
            rangeStart: c("cover 0%"),
            rangeEnd: c("cover 25%"),
        }


        /** INITIAL CONSULTATION , DISCOVERY CALL */
        document.getElementById("b_idea").animate([
            {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
            {transform: "translate3d(30px, 380px, 0px) scale(0.65)", display: "none"},
        ], {...commonProps, rangeStart: c("cover 35%"), rangeEnd: c("cover 60%")})

        document.getElementById("b_-2").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(15px, 260px, 0px) scale(0.75)", display: "none"},
            ],
            {...commonProps,  rangeStart: c("cover 35%"),  rangeEnd: c("cover 60%")},
        );
        document.getElementById("arrow0").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(30px, 290px, 0px) scale(0.75)", display: "none"},
            ],
            {...commonProps,  rangeStart: c("cover 35%"),  rangeEnd: c("cover 60%")},
        );
        document.getElementById("arrow1").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(40px, 260px, 0px) scale(0.6)", display: "none"},
            ],
            {...commonProps,  rangeStart: c("cover 35%"),  rangeEnd: c("cover 60%")},
        );
        document.querySelector("#arrow_to_DESIGN_SERVICE path:first-child").animate(
            [
                {d: "path('M201.33,248.76 L252.61,248.76 L252.61,540 L272.71,540')", display: "initial"},
                {d: "path('M201.33,540 L252.61,540 L252.61,540 L272.71,540')", display: "none"},
            ],
            {...commonProps,  rangeStart: c("cover 35%"),  rangeEnd: c("cover 60%")},
        );
        document.querySelector("#arrow_to_DESIGN_SERVICE path:last-child").animate(
            [
                {display: "initial"},
                {display: "none"},
            ],
            {...commonProps,  rangeStart: c("cover 35%"),  rangeEnd: c("cover 60%")},
        );
        /***/

        /** POST-INSTALL SURVEY , PHOTOGRAPH PROJECT*/
        /** POST-INSTALL SURVEY */
        const b0 = document.getElementById("b_-24");
        b0.animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(220px, 0px, 0px) scale(1)", display: "none"},
            ],
            {...commonProps},
        )

        document.getElementById("arrow3").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(130px, 0px, 0px) scale(1)", display: "none"},
            ],
            {...commonProps},
        );
        /***/
        /** SITE SURVEY, RESEARCH, CONCEPTUAL DESIGN PRESENTATION, PRELIMINARY DRAWINGS, TRADE DAY */
        document.querySelector("#b_-30").animate([
                {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(-131px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(-131px, -156px, 0px)", opacity: 1, display: "none"},
            ], {...commonProps, rangeEnd: c("cover 25%")},
        )
        document.querySelector("#b_research").animate([
                {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(-131px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(-131px, 220px, 0px)", opacity: 1, display: "none"},
            ], {...commonProps,  rangeEnd: c("cover 25%")},
        )
        document.querySelectorAll("#b_scanspace-3, #arrow_to_CONCEPTUAL_DESIGN_PRESENTATION path:last-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0, -50px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0px, -50px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(50px, -50px, 0px)", clipPath: 'inset(8% 0 11% 0)', display: "none"},
                ], {...commonProps,  rangeEnd: c("cover 40%")},
            ))
        document.querySelectorAll("#arrow_to_CONCEPTUAL_DESIGN_PRESENTATION path:first-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0, -50px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0px, -50px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0px, -50px, 0px)", clipPath: 'inset(8% 0 11% 0)',},
                ], {...commonProps,  rangeEnd: c("cover 40%")},
            ))
        document.querySelectorAll("#b_sharevision")
            .forEach((el) => el.animate([
                    {opacity: 0, display: "initial"},
                    {opacity: 1, display: "initial"},
                ], {...commonProps,  rangeStart: c("cover 30%"),  rangeEnd: c("cover 40%")},
            ))

        document.querySelectorAll("#b_scanspace-4")
            .forEach((el) => el.animate([
                    {opacity: 0, display: "initial"},
                    {opacity: 1, display: "initial"},
                ], {...commonProps,  rangeStart: c("cover 85%"),  rangeEnd: c("cover 90%")},
            ))
        document.querySelectorAll(" #b_-6")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)"},
                    {transform: "translate3d(560px, 0px, 0px)"},
                    {transform: "translate3d(560px, -212px, 0px)"},
                ], {...commonProps, rangeEnd: c("cover 50%")},
            ))
        document.querySelectorAll("#arrow_to_PRELIMINARY_DRAWINGS")
            .forEach((el) => el.animate([
                    // {transform: "translate3d(0px, 0px, 0px)"},
                    // {transform: "translate3d(0, -50px, 0px)"},
                {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(50px, 0px, 0px)", clipPath: 'inset(0 0 0 80%)', display: "initial"},
                {transform: "translate3d(50px, 0px, 0px)", clipPath: 'inset(0 0 100% 80%)', display: "none"},
                ], {...commonProps, rangeStart: c("cover 0%"),  rangeEnd: c("cover 50%")},
            ))
        document.querySelectorAll("#arrow_to_SITE_SURVAEY path, #arrow_to_REASERCH path")
            .forEach((el) => el.animate(
                [
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-23px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-23px, 0px, 0px)", opacity: 0, display: "none"},
                ],
                {...commonProps,  rangeEnd: c("cover 10%")},
            ))
        document.querySelector("#line_RESERCH_SITE_SURVAEY").animate([
                {d: "path('M628.59,324.26 L666.03,324.26 L666.03,698.16 L628.59,698.03')", display: "initial"},
                {d: "path('M490,324.26 L666.03,324.26 L666.03,698.16 L490,698.03')", display: "initial"},
                {d: "path('M498.59,540 L666.03,540 L666.03,540 L490,540')", display: "initial"},
            ],
            {...commonProps,  rangeEnd: c("cover 25%")},
        )
        /***/

        /** SOURCING AND SELECTING, DEVELOP DRAWINGS */
        document.querySelectorAll(" #b_-26")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 0, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 0, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 40%"),  rangeEnd: c("cover 55%")},
            ))
        document.querySelectorAll("#b_-29")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 0, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 0, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 45%"),  rangeEnd: c("cover 70%")},
            ))
        document.querySelector(" #arrow_to_SOURCING").animate([
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 0 100%)', display: "none"},
            ], {...commonProps,  rangeStart: c("cover 40%"),  rangeEnd: c("cover 50%")},
        );
        document.querySelector(" #arrow_to_DEVELOP_DRAWING").animate([
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 100% 0)', display: "none"},
            ], {...commonProps,  rangeStart: c("cover 47%"),  rangeEnd: c("cover 56%")},
        );
        /***/
        /** FINAL DESIGN */
        document.querySelectorAll("#b_-12")
            .forEach((el) => el.animate([
                {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(-460px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(-460px, -21px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(-590px, -21px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(-590px, -21px, 0px)", clipPath: 'inset(10% 10% 10% 10%)', display: "none"},
                ], {...commonProps,  rangeStart: c("cover 25%"),  rangeEnd: c("cover 70%")},
            ));
        document.querySelectorAll("#b_-9, #arrow_to_CLIENT_APPROVAL path:last-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 212px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 212px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 40%"),  rangeEnd: c("cover 56%")},
            ));

        document.querySelectorAll("#b_-13")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-200px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-200px, -21px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-230px, -21px, 0px)", opacity: 1, display: "none"},
                    {transform: "translate3d(-330px, -21px, 0px)", opacity: 1, display: "none"},
                    {transform: "translate3d(-330px, -21px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 25%"),  rangeEnd: c("cover 50%")},
            ));
        document.querySelectorAll("#arrow_to_PROPOSALS_FOR_MERCHANDISE path, #arrow_to_PAYMENT_COLLECTED")
            .forEach(el => el.animate([
                {display: "initial"},
                {display: "none"},
            ], {...commonProps,  rangeStart: c("cover 25%"),  rangeEnd: c("cover 26%")},
        ));
        /***/


        document.querySelectorAll("#b_scanspace-2")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, 70px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(30% 30% 30% 30%)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(30% 30% 30% 30%)', display: "none"},
                ], {...commonProps,  rangeEnd: c("cover 25%")},
            ));
        document.querySelectorAll("#b_-20")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 111px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 111px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeEnd: c("cover 25%")},
            ));

        document.querySelectorAll("#b_-19")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 221px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 221px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 5%"),  rangeEnd: c("cover 30%")},
            ));

        document.querySelectorAll("#b_-18")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 336px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 336px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 10%"),  rangeEnd: c("cover 36%")},
            ));

        document.querySelectorAll("#b_-17")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 403px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 403px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 10%"),  rangeEnd: c("cover 40%")},
            ));

        document.querySelectorAll("#b_-16")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 403px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 403px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 10%"),  rangeEnd: c("cover 50%")},
            ));

        document.querySelectorAll("#arrow_to_PAYMENT_COLLECTION_2, #arrow_to_INSTALLATION, #arrow_to_PAYMENT_COLLECTED, #arrow_to_STYLING, #arrow_to_PROJECT_WRAP, #arrow_to_FINAL_INVOICING, #arrow_to_CLIENT_DECIDES")
            .forEach(el => el.animate([
                    {opacity: 1, display: "initial"},
                    {opacity: 0, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 1%"),  rangeEnd: c("cover 5%")},
            ));
        document.querySelectorAll("#arrow-DECIDES_FINAL_INVOICES")
            .forEach(el => el.animate([
                    {clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {clipPath: 'inset(0 0 0 100%)', display: "initial"},
                    // {clipPath: 'inset(0 0 0 0)', display: "none"},
                ], {...commonProps, rangeStart: c("cover 6%"), rangeEnd: c("cover 13%")},
            ));


        /** Adjusting to final state */
        document.querySelectorAll("#b_scanspace")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(195px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(195px, 0px, 0px)", clipPath: 'inset(10% 15% 10% 15%)', display: "initial"},
                ], {...commonProps,  rangeStart: c("cover 60%"),  rangeEnd: c("cover 80%")},
            ));

        document.querySelectorAll("#b_-8")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(0px, -323px, 0px)", display: "initial"},
                    {transform: "translate3d(-440px, -323px, 0px)", display: "none"},
                ], {...commonProps,  rangeStart: c("cover 60%"),  rangeEnd: c("cover 90%")},
            ));

        document.querySelectorAll("#b_generate")
            .forEach((el) => el.animate([
                    {opacity: 0},
                    {opacity: 1},
                ], {...commonProps,  rangeStart: c("cover 85%"),  rangeEnd: c("cover 90%")},
            ));


        document.querySelectorAll("#arrow_to_FINAL_DESIGN")
            .forEach((el) => el.animate([
                    {clipPath: "circle(600px at right top)", display: "initial"},
                    {clipPath: "circle(100px at right top)", display: "initial"},
                    {clipPath: "circle(5px at right top)", display: "initial"},
                ], {...commonProps,  rangeStart: c("cover 55%"),  rangeEnd: c("cover 70%")},
            ));
        document.querySelectorAll("#arrow_to_PROPOSALS_FOR_MERCHANDISE line:first-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 21% 0 )', opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 61% 0 )', opacity: 0, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 64%"),  rangeEnd: c("cover 80%")},
            ));
        document.querySelectorAll("#b_-15")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-30px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-30px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(-20px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(458px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(458px, 404px, 0px)", display: "none"},
                ], {...commonProps,  rangeStart: c("cover 50%"),  rangeEnd: c("cover 87%")},
            ));
        document.querySelectorAll("#b_shopdesign")
            .forEach((el) => el.animate([
                    {opacity: 0},
                    {opacity: 1},
                ], {...commonProps,  rangeStart: c("cover 85%"),  rangeEnd: c("cover 90%")},
            ));

        document.querySelectorAll("#arrow_to_DREAM_HOME path:first-child")
            .forEach((el) => el.animate([
                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55 L1100,136.55 L1100,150')", display: "initial"},

                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55  L1100,136.55 L1100,300')", display: "initial"},
                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55  L1110,136.55 L1110,300')", display: "initial"},

                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55  L1110,136.55 L1110,300')", display: "initial"},
                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55  L1240,136.55 L1240,300')", display: "initial"},
                {d: "path('M2058.52, 530 L2058.52, 505.58 L2058.52,136.55  L1510,136.55 L1510,300')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,136.55 L1580,136.55 L1580,350')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,136.55 L1600,136.55 L1600,550')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,200 L1600,200 L1600,550')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,250 L1600,250 L1600,550')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,530 L1600,530 L1600,550')", display: "initial"},
                {d: "path('M1860, 530 L1860, 505.58 L1860,540 L1600,540 L1600,550')", display: "none"},
                ], {...commonProps, rangeStart: c("cover 60%"), rangeEnd: c("cover 90%")},
            ));

        document.querySelector("#b_-21").animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-200px, 0px, 0px)", display: "initial"},
                ], {...commonProps,  rangeStart: c("cover 75%"), rangeEnd: "cover 78%"},);

        document.querySelector("#arrow_to_DREAM_HOME path:last-child").animate([
                    {opacity: 1, display: "initial"},
                    {opacity: 0, display: "none"},
                ], {...commonProps,  rangeStart: c("cover 70%"),  rangeEnd: c("cover 75%")},);

        document.querySelector("#b_-4").animate([
            {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)'},
            {transform: "translate3d(231px, 0px, 0px)", clipPath: 'inset(24% 0% 24% 0%)'},
                ], {...commonProps,  easing: "ease-in-out",  rangeStart: c("cover 60%"),  rangeEnd: c("cover 75%")},);

        document.querySelector("#final_arrow_1").animate([
            {transform: "translate3d(-235px, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out",  rangeStart: c("cover 60%"),  rangeEnd: c("cover 75%")},);

        document.querySelector("#final_arrow_2").animate([
            {transform: "translate3d(-235px, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out",  rangeStart: c("cover 60%"),  rangeEnd: c("cover 75%")},
            );

        document.querySelector("#final_arrow_3").animate([
            {transform: "translate3d(-235px, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out",  rangeStart: c("cover 60%"),  rangeEnd: c("cover 75%")},
            );

        document.querySelector("#final_arrow_4").animate([
            {transform: "translate3d(0, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out",  rangeStart: c("cover 80%"),  rangeEnd: c("cover 85%")},
            );

        document.querySelector("#final_arrow_5").animate([
            {transform: "translate3d(0, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out",  rangeStart: c("cover 90%"),  rangeEnd: c("cover 95%")},
            );

        document.querySelector("#SCAN_SPACE").animate([
            {transform: "translate3d(150px, 220px, 0px) scale(0.75)", opacity: 0, display: "none"},
            {transform: "translate3d(0px, 0px, 0px) scale(1)", opacity: 1, display: "initial"},
                ], {...commonProps, easing: "ease-out",  rangeStart: c("cover 90%"),  rangeEnd: c("cover 100%")},
            );
        document.querySelector("#BUDGET_BAG").animate([
            {transform: "translate3d(220px, 220px, 0px) scale(0.75)", opacity: 0, display: "none"},
            {transform: "translate3d(0px, 0px, 0px) scale(1)", opacity: 1, display: "initial"},
                ], {...commonProps, easing: "ease-out",  rangeStart: c("cover 90%"),  rangeEnd: c("cover 100%")},
            );
        document.querySelector("#BESPOKE_DESIGN").animate([
            {transform: "translate3d(320px, 220px, 0px) scale(0.75)", opacity: 0, display: "none"},
            {transform: "translate3d(0px, 0px, 0px) scale(1)", opacity: 1, display: "initial"},
                ], {...commonProps, easing: "ease-out",  rangeStart: c("cover 90%"),  rangeEnd: c("cover 100%")},
            );
        document.querySelector("#SHOP_DESIGN").animate([
            {transform: "translate3d(390px, 220px, 0px) scale(0.75)", opacity: 0, display: "none"},
            {transform: "translate3d(0px, 0px, 0px) scale(1)", opacity: 1, display: "initial"},
                ], {...commonProps, easing: "ease-out",  rangeStart: c("cover 90%"),  rangeEnd: c("cover 100%")},
            );


    }
}

const scrollAnimation = new ScrollAnimation();

// window.addEventListener('resize', function (event) {
//   morphAnimation.main();
// });

scrollAnimation.init({})
    .then(scrollAnimation.progressBar)
    .then(scrollAnimation.main)
