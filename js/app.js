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
            {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
            {transform: "translate3d(30px, 380px, 0px) scale(0.65)", display: "none"},
        ], {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"})

        document.getElementById("b_-2").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(15px, 260px, 0px) scale(0.75)", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"},
        );
        document.getElementById("arrow0").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(30px, 290px, 0px) scale(0.75)", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"},
        );
        document.getElementById("arrow1").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(40px, 260px, 0px) scale(0.6)", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"},
        );
        document.querySelector("#arrow_to_DESIGN_SERVICE path:first-child").animate(
            [
                {d: "path('M201.33,248.76 L252.61,248.76 L252.61,540 L272.71,540')", display: "initial"},
                {d: "path('M201.33,540 L252.61,540 L252.61,540 L272.71,540')", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"},
        );
        document.querySelector("#arrow_to_DESIGN_SERVICE path:last-child").animate(
            [
                {display: "initial"},
                {display: "none"},
            ],
            {...commonProps, rangeStart: "cover 35%", rangeEnd: "cover 60%"},
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
        // .onfinish = ()=>{b0.style.opacity = '0';};

        document.getElementById("arrow3").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(130px, 0px, 0px) scale(1)", display: "none"},
            ],
            {...commonProps},
        );
        /***/
        /** PHOTOGRAPH PROJECT */
        document.getElementById("b_-23").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1)", display: "initial"},
                {transform: "translate3d(0px, -470px, 0px) scale(1)", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
        )
        // .onfinish = ()=>{b0.style.opacity = '0';};

        document.getElementById("arrow-PHOTOGRAPH-PROJECT").animate(
            [
                {transform: "translate3d(0px, 0px, 0px) scale(1, 1)", display: "initial"},
                {transform: "translate3d(0px, 500px, 0px) scale(1, 0.05)", display: "none"},
            ],
            {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%",},
        );
        /***/
        /***/

        /** DESIGN PRESENTATION, CLIENT INPUT*/
        document.querySelectorAll("#b_-28, #arrow_to_CLIENT_INPUT")
            .forEach((el) => el.animate(
                    [
                        {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                        {transform: "translate3d(100px, 0px, 0px)", opacity: 1, display: "initial"},
                        {transform: "translate3d(100px, -187px, 0px)", opacity: 1, display: "initial"},
                        {transform: "translate3d(338px, -187px, 0px)", opacity: 1, display: "initial"},
                        {transform: "translate3d(338px, -187px, 0px)", opacity: 0, display: "none"},
                    ],
                    {...commonProps, rangeEnd: "cover 45%"},
                )
            )

        document.querySelector("#b_-27").animate(
            [
                {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(770px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(770px, -128px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(770px, -128px, 0px)", opacity: 0, display: "none"}
            ], {...commonProps, rangeEnd: "cover 60%"});

        document.querySelector("#arrow_to_DESIGN_PRESENTATION path:last-child").animate([
            {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
            {transform: "translate3d(55px, 0px, 0px)", opacity: 0, display: "none"},
        ], {...commonProps, rangeEnd: "cover 10%"});

        document.querySelector("#arrow_to_DESIGN_PRESENTATION path:first-child").animate([
            {d: "path('M953.69,916.89 L953.69,1020')"},
            {d: "path('M1143.99,885 L1144.54,990')"},
            {d: "path('M1143.99,545 L1144.54,990')"},
            {d: "path('M1143.99,545 L1144.54,950')"},
            {d: "path('M1143.99,545 L1144.54,880')"},
            {d: "path('M1143.99,545 L1144.54,545')"},
        ], {...commonProps, rangeEnd: "cover 45%"});


        document.querySelector("#arrow_to_SOURCING_SELECTING path:first-child").animate(
            [
                {d: "path('M411.27,957.52 L411.27,803.42 L654.95,803.42')"},
                {d: "path('M510,957.52 L510,803.42 L654.95,803.42')", display: "initial"},
                {d: "path('M510,804 L510,803.42 L654.95,803.42')", display: "initial"},
                {d: "path('M660,803.42 L660,803.42 L660,803.42')", display: "initial"},
                {d: "path('M680,803.42 L680,803.42 L680,803.42')", display: "initial"},
                {d: "path('M680,803.42 L680,803.42 L680,803.42')", display: "none"},
            ],
            {...commonProps, rangeEnd: "cover 50%"},
        );
        document.querySelector(" #arrow_to_SOURCING_SELECTING path:last-child").animate(
            [
                {opacity: 1, display: "initial"},
                {opacity: 1, display: "none"},
            ], {...commonProps, rangeEnd: "cover 25%"});

        document.querySelector("#line_DEVELOP_to_SOURCING").animate(
            [
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 50% 0)', display: "initial"},
                {clipPath: 'inset(0 0 100% 0)', display: "initial"},
            ],
            {...commonProps});
        document.querySelector("#arrow_to_CLIENT_INPUT").animate(
            [
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 50% 0 0)', display: "initial"},
                {clipPath: 'inset(0 100% 0 0)', display: "initial"},
            ],
            {...commonProps});
        /***/

        /** BUDGET ESTIMATE*/
        document.querySelectorAll("#b_")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(480px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(480px, 330px, 0px)", display: "none"},
                ],
                {...commonProps, rangeEnd: "cover 30%"},
            ));

        document.querySelector("#arrow_to_BUDGET_ESTIMATE path").animate(
            [
                {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(300px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(300px, 0px, 0px)", opacity: 0, display: "initial"},
                {transform: "translate3d(320px, 0px, 0px)", opacity: 0, display: "none"},],
            {...commonProps, rangeEnd: "cover 29%"},
        );
        document.querySelector("#arrow_to_BUDGET_ESTIMATE polyline").animate(
            [
                {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(40px, 0px, 0px)", clipPath: 'inset(0 0 0 95% )', display: "initial"},
                {transform: "translate3d(40px, 0px, 0px)", clipPath: 'inset(100% 0  0 100%)', display: "initial"},
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
        /** SITE SURVEY, RESEARCH, CONCEPTUAL DESIGN PRESENTATION, PRELIMINARY DRAWINGS, TRADE DAY */
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
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0, -50px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0px, -50px, 0px)", clipPath: 'inset(0 0 0 0)',},
                    {transform: "translate3d(0px, -50px, 0px)", clipPath: 'inset(8% 0 11% 0)',},
                ], {...commonProps, rangeEnd: "cover 40%"},
            ))
        document.querySelectorAll("#b_sharevision")
            .forEach((el) => el.animate([
                    {opacity: 0, display: "initial"},
                    {opacity: 1, display: "initial"},
                ], {...commonProps, rangeStart: "cover 30%", rangeEnd: "cover 40%"},
            ))

        document.querySelectorAll("#b_scanspace-4")
            .forEach((el) => el.animate([
                    {opacity: 0, display: "initial"},
                    {opacity: 1, display: "initial"},
                ], {...commonProps, rangeStart: "cover 85%", rangeEnd: "cover 90%"},
            ))





        document.querySelectorAll("#b_-7")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)"},
                    {transform: "translate3d(0, -50px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(0, -52px, 0px)"},
                    {transform: "translate3d(-280px, -52px, 0px)"},
                ], {...commonProps, rangeEnd: "cover 80%"},
            ))
        document.querySelectorAll(" #b_-6")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)"},
                    {transform: "translate3d(560px, 0px, 0px)"},
                    {transform: "translate3d(560px, -212px, 0px)"},
                ], {...commonProps, rangeEnd: "cover 50%"},
            ))
        document.querySelectorAll("#arrow_to_PRELIMINARY_DRAWINGS")
            .forEach((el) => el.animate([
                    // {transform: "translate3d(0px, 0px, 0px)"},
                    // {transform: "translate3d(0, -50px, 0px)"},
                {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                {transform: "translate3d(50px, 0px, 0px)", clipPath: 'inset(0 0 0 80%)', display: "initial"},
                {transform: "translate3d(50px, 0px, 0px)", clipPath: 'inset(0 0 100% 80%)', display: "none"},
                ], {...commonProps, rangeStart: "cover 0", rangeEnd: "cover 50%"},
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
                {d: "path('M628.59,324.26 L666.03,324.26 L666.03,698.16 L628.59,698.03')", display: "initial"},
                {d: "path('M490,324.26 L666.03,324.26 L666.03,698.16 L490,698.03')", display: "initial"},
                {d: "path('M498.59,540 L666.03,540 L666.03,540 L490,540')", display: "initial"},
            ],
            {...commonProps, rangeEnd: "cover 25%"},
        )
        /***/

        /** ITEMS SHIPPED, ORDERS PLACED*/
        document.querySelector(" #b_-14").animate([
                {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                {transform: "translate3d(0px, -198px, 0px)", opacity: 0, display: "none"},
            ], {...commonProps, rangeEnd: "cover 33%"},
        );
        document.querySelector(" #arrow_to_FINAL_INVOICES").animate([
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 100% 0)', display: "none"},
            ], {...commonProps, rangeEnd: "cover 18.5%"},
        );
        document.querySelector(" #arrow_to_ORDER_PLACED path:last-child").animate([
                {opacity: 1, display: "initial"},
                {opacity: 0, display: "none"},
            ], {...commonProps, rangeEnd: "cover 5%"},
        );

        document.querySelectorAll(" #b_-25")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeEnd: "cover 70%"},
            ))
        document.querySelectorAll("#arrow_to_ITEMS_SHIPPED")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, -198px, 0px)", clipPath: 'inset(50% 50% 50% 50%)', display: "none"},
                ], {...commonProps, rangeEnd: "cover 70%"},
            ))

        document.querySelector("#arrow_to_ORDER_PLACED path:first-child").animate([
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,469.23 L1151.01,469.23')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,430 L1151.01,430')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,300 L1151.01,300')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1272.91,291.76 L1272.91,270 L1151.01,270')", display: "initial"},
                {d: "path('M1726,291.76 L1726,291.76 L1726,270 L1151.01,270')", opacity: '1',display: "initial"},
                {d: "path('M1726,291.76 L1726,291.76 L1726,270 L1726,270')", opacity: '0', display: "none"},
            ],
            {...commonProps, easing: "linear", rangeStart: "cover 1%", rangeEnd: "cover 78%"},
        );

        /***/

        /** SOURCING AND SELECTING, DEVELOP DRAWINGS */
        document.querySelectorAll(" #b_-26")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 0, display: "initial"},
                    {transform: "translate3d(396px, 0px, 0px)", opacity: 0, display: "none"},
                ], {...commonProps, rangeStart: "cover 40%", rangeEnd: "cover 55%"},
            ))
        document.querySelectorAll("#b_-29")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 0, display: "initial"},
                    {transform: "translate3d(0px, -320px, 0px)", opacity: 0, display: "none"},
                ], {...commonProps, rangeStart: "cover 45%", rangeEnd: "cover 70%"},
            ))
        document.querySelector(" #arrow_to_SOURCING").animate([
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 0 100%)', display: "none"},
            ], {...commonProps, rangeStart: "cover 40%", rangeEnd: "cover 50%"},
        );
        document.querySelector(" #arrow_to_DEVELOP_DRAWING").animate([
                {clipPath: 'inset(0 0 0 0)', display: "initial"},
                {clipPath: 'inset(0 0 100% 0)', display: "none"},
            ], {...commonProps, rangeStart: "cover 47%", rangeEnd: "cover 56%"},
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
                ], {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 70%"},
            ));
        document.querySelectorAll("#b_-9, #arrow_to_CLIENT_APPROVAL path:last-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 212px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 212px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 40%", rangeEnd: "cover 56%"},
            ));

        document.querySelectorAll("#b_-13")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-200px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-200px, -21px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(-230px, -21px, 0px)", opacity: 1, display: "none"},
                    {transform: "translate3d(-330px, -21px, 0px)", opacity: 1, display: "none"},
                    {transform: "translate3d(-330px, -21px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 50%"},
            ));
        document.querySelectorAll("#arrow_to_PROPOSALS_FOR_MERCHANDISE path, #arrow_to_PAYMENT_COLLECTED")
            .forEach(el => el.animate([
                {display: "initial"},
                {display: "none"},
            ], {...commonProps, rangeStart: "cover 25%", rangeEnd: "cover 26%"},
        ));
        /***/


        document.querySelectorAll("#b_scanspace-2")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(0px, 70px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(30% 30% 30% 30%)', display: "initial"},
                    {transform: "translate3d(506px, 70px, 0px)", clipPath: 'inset(30% 30% 30% 30%)', display: "none"},
                ], {...commonProps, rangeEnd: "cover 25%"},
            ));
        document.querySelectorAll("#b_-20")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 111px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 111px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeEnd: "cover 25%"},
            ));

        document.querySelectorAll("#b_-19")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 221px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 221px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 5%", rangeEnd: "cover 30%"},
            ));

        document.querySelectorAll("#b_-18")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 336px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 336px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 10%", rangeEnd: "cover 36%"},
            ));

        document.querySelectorAll("#b_-17")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 403px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(199px, 403px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 10%", rangeEnd: "cover 40%"},
            ));

        document.querySelectorAll("#b_-16")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 0px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 403px, 0px)", opacity: 1, display: "initial"},
                    {transform: "translate3d(666px, 403px, 0px)", opacity: 1, display: "none"},
                ], {...commonProps, rangeStart: "cover 10%", rangeEnd: "cover 50%"},
            ));

        document.querySelectorAll("#arrow_to_PAYMENT_COLLECTION_2, #arrow_to_INSTALLATION, #arrow_to_PAYMENT_COLLECTED, #arrow_to_STYLING, #arrow_to_PROJECT_WRAP, #arrow_to_FINAL_INVOICING, #arrow_to_CLIENT_DECIDES")
            .forEach(el => el.animate([
                    {opacity: 1, display: "initial"},
                    {opacity: 0, display: "none"},
                ], {...commonProps, rangeStart: "cover 1%", rangeEnd: "cover 5%"},
            ));
        document.querySelectorAll("#arrow-DECIDES_FINAL_INVOICES")
            .forEach(el => el.animate([
                    {clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {clipPath: 'inset(0 0 0 100%)', display: "initial"},
                    // {clipPath: 'inset(0 0 0 0)', display: "none"},
                ], {...commonProps, rangeStart: "cover 6%", rangeEnd: "cover 13%"},
            ));


        /** Adjusting to final state */
        document.querySelectorAll("#b_scanspace")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(195px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', display: "initial"},
                    {transform: "translate3d(195px, 0px, 0px)", clipPath: 'inset(10% 15% 10% 15%)', display: "initial"},
                ], {...commonProps, rangeStart: "cover 60%", rangeEnd: "cover 80%"},
            ));

        document.querySelectorAll("#b_-8")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(0px, -323px, 0px)", display: "initial"},
                    {transform: "translate3d(-440px, -323px, 0px)", display: "initial"},
                ], {...commonProps, rangeStart: "cover 60%", rangeEnd: "cover 90%"},
            ));
        document.querySelectorAll("#arrow_to_FINAL_DESIGN")
            .forEach((el) => el.animate([
                    {clipPath: "circle(600px at right top)", display: "initial"},
                    {clipPath: "circle(100px at right top)", display: "initial"},
                    {clipPath: "circle(5px at right top)", display: "initial"},
                ], {...commonProps, rangeStart: "cover 55%", rangeEnd: "cover 70%"},
            ));
        document.querySelectorAll("#arrow_to_PROPOSALS_FOR_MERCHANDISE line:first-child")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)', opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 21% 0 )', opacity: 1, display: "initial"},
                    {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 61% 0 )', opacity: 0, display: "none"},
                ], {...commonProps, rangeStart: "cover 64%", rangeEnd: "cover 80%"},
            ));
        document.querySelectorAll("#b_-15")
            .forEach((el) => el.animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-30px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-30px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(-20px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(458px, 134px, 0px)", display: "initial"},
                    {transform: "translate3d(458px, 404px, 0px)", display: "none"},
                ], {...commonProps, rangeStart: "cover 50%", rangeEnd: "cover 87%"},
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
                ], {...commonProps, rangeStart: "cover 60%", rangeEnd: "cover 90%"},
            ));

        document.querySelector("#b_-21").animate([
                    {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                    {transform: "translate3d(-200px, 0px, 0px)", display: "initial"},
                ], {...commonProps, rangeStart: "cover 75%", rangeEnd: "cover 77.5%"},);

        document.querySelector("#arrow_to_DREAM_HOME path:last-child").animate([
                    {opacity: 1, display: "initial"},
                    {opacity: 0, display: "none"},
                ], {...commonProps, rangeStart: "cover 70%", rangeEnd: "cover 75%"},);

        document.querySelector("#b_-4").animate([
            {transform: "translate3d(0px, 0px, 0px)", clipPath: 'inset(0 0 0 0)'},
            {transform: "translate3d(231px, 0px, 0px)", clipPath: 'inset(24% 0% 24% 0%)'},
                ], {...commonProps,  easing: "ease-in-out", rangeStart: "cover 60%", rangeEnd: "cover 75%"},);

        document.querySelector("#final_arrow_1").animate([
            {transform: "translate3d(-235px, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out", rangeStart: "cover 60%", rangeEnd: "cover 75%"},);

        document.querySelector("#final_arrow_2").animate([
            {transform: "translate3d(-235px, 0px, 0px)", display: "none"},
            {transform: "translate3d(0px, 0px, 0px)", display: "initial"},
                ], {...commonProps, easing: "ease-in-out", rangeStart: "cover 60%", rangeEnd: "cover 75%"},);


    }
}

const scrollAnimation = new ScrollAnimation();

// window.addEventListener('resize', function (event) {
//   morphAnimation.main();
// });

scrollAnimation.init({})
    .then(scrollAnimation.progressBar)
    .then(scrollAnimation.main)
