$(document).ready(function () {

    let colors = [
        "#ff0080", // neon pink
        "#00f7ff", // cyan
        "#8a2eff", // purple
        "#00ff99", // green
        "#ffd700"  // gold
    ];

    let i = 0;

    // Screen size
    let rightSide = $(window).width() - 90;
    let bottomSide = $(window).height() - 90;

    // Glow Effect
    function glowEffect() {

        let color = colors[i % colors.length];

        $(".corner").css({
            "background": color,
            "box-shadow": `
                0 0 30px ${color},
                0 0 60px ${color},
                0 0 100px ${color}
            `
        });

        i++;
    }

    // Animation Loop
    function startAnimation() {

        glowEffect();

        // TOP LEFT → BOTTOM LEFT
        $(".corner").animate({
            top: bottomSide + "px",
            left: "0px",
            opacity: 0.3
        }, 1000, function () {

            glowEffect();

            // BOTTOM LEFT → BOTTOM RIGHT
            $(".corner").animate({
                top: bottomSide + "px",
                left: rightSide + "px",
                opacity: 0.9
            }, 1000, function () {

                glowEffect();

                // BOTTOM RIGHT → TOP RIGHT
                $(".corner").animate({
                    top: "0px",
                    left: rightSide + "px",
                    opacity: 0.4
                }, 1000, function () {

                    glowEffect();

                    // TOP RIGHT → TOP LEFT
                    $(".corner").animate({
                        top: "0px",
                        left: "0px",
                        opacity: 0.8
                    }, 1000, function () {

                        // LOOP FOREVER
                        startAnimation();

                    });

                });

            });

        });

    }

    // Start Animation
    startAnimation();

});