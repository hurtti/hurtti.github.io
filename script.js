let itl = document.querySelector("#itl");
let itr = document.querySelector("#itr");
let ibl = document.querySelector("#ibl");
let ibr = document.querySelector("#ibr");
let imid = document.querySelector("#imid");
let ihor = document.querySelector("#ihor");
let b = document.querySelector("#b");

itl.style.left = window.innerWidth / 2 - itl.width / 2 + "px";
itl.style.top = window.innerHeight / 2 - itl.height / 2 + "px";

itr.style.left = window.innerWidth / 2 - itr.width / 2 + "px";
itr.style.top = window.innerHeight / 2 - itr.height / 2 + "px";

ibl.style.left = window.innerWidth / 2 - ibl.width / 2 + "px";
ibl.style.top = window.innerHeight / 2 - ibl.height / 2 + "px";

ibr.style.left = window.innerWidth / 2 - ibr.width / 2 + "px";
ibr.style.top = window.innerHeight / 2 - ibr.height / 2 + "px";

imid.style.left = window.innerWidth / 2 - imid.width / 2 + "px";
imid.style.top = window.innerHeight / 2 - imid.height / 2 + "px";

ihor.style.left = 0 + "px";
ihor.style.top = window.innerHeight / 2 - ihor.height / 2 + "px";

b.style.left =
    window.innerWidth / 2 - b.clientWidth / 2 - ihor.width / 2 + "px";
b.style.top = window.innerHeight / 2 - b.clientHeight / 2 + "px";

const movePathTL = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: -(window.innerWidth / 2 - itl.width / 2),
            y: -(window.innerHeight / 2 - itl.height / 2),
        },
    ],
};

const movePathAway = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: -window.innerWidth,
            y: 0,
        },
    ],
};

const movePathTR = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: window.innerWidth / 2 - itl.width / 2,
            y: -(window.innerHeight / 2 - itl.height / 2),
        },
    ],
};

const movePathBL = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: -(window.innerWidth / 2 - itl.width / 2),
            y: window.innerHeight / 2 - itl.height / 2,
        },
    ],
};

const movePathBR = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: window.innerWidth / 2 - itl.width / 2,
            y: window.innerHeight / 2 - itl.height / 2,
        },
    ],
};

const movePathMID = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: -window.innerWidth,
            y: -(window.innerHeight / 2 - imid.height / 2) - imid.height * 0.1,
        },
    ],
};

const movePathHOR = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: window.innerWidth / 2 - ihor.width / 2 - ihor.width * 0.05,
            y: 0,
        },
    ],
};

const movePathB = {
    curviness: 1,
    autoRotate: false,
    values: [
        {
            x: -(window.innerWidth * 0.05),
            y: 0,
        },
    ],
};

const tween = new TimelineLite();

tween.to(
    "#itl",
    1,
    {
        bezier: movePathTL,
        ease: Power1.easeInOut,
    },
    0
);

tween.to(
    "#itr",
    1,
    {
        bezier: movePathTR,
        ease: Power1.easeInOut,
    },
    0
);

tween.to(
    "#ibl",
    1,
    {
        bezier: movePathBL,
        ease: Power1.easeInOut,
    },
    0
);

tween.to(
    "#ibr",
    1,
    {
        bezier: movePathBR,
        ease: Power1.easeInOut,
    },
    0
);

tween.to(
    "#imid",
    1,
    {
        bezier: movePathMID,
        ease: Power1.easeInOut,
        height: imid.height * 2,
    },
    1
);

tween.to(
    ["#itl", "#itr", "#ibl", "#ibr"],
    1,
    {
        bezier: movePathAway,
        ease: Power1.easeInOut,
    },
    1
);

tween.to(
    "#ihor",
    1,
    {
        bezier: movePathHOR,
        ease: Power1.easeInOut,
        opacity: 1,
    },
    2
);

tween.to(
    "#b",
    1,
    {
        bezier: movePathB,
        ease: Power1.easeInOut,
        opacity: 1,
    },
    3
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1500,
    triggerHook: 0,
})
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);
