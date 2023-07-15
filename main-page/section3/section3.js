let cw = window.innerWidth,
  ch = window.innerHeight,
  nWaves = 5,
  waves = [],
  amp = 10,
  speed = 0.4,
  detail = 30,
  waveY = ch; // 초기 파도의 수직 위치를 창의 높이로 설정합니다.

for (let w = 0; w < nWaves; w++) {
  let p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  waves.push(p);
  document.querySelector("#m").append(p);
  gsap.set(p, {
    attr: () => {
      return w == 0
        ? { fill: "#fff" }
        : {
            fill: "none",
            stroke: "#fff",
            "stroke-dasharray": "2 4",
            "stroke-width": 3 - (w / nWaves) * 3,
          };
    },
  });
}

gsap
  .timeline({ defaults: { duration: 5 }, delay: 5 }) // 1초 뒤에 애니메이션을 시작합니다.
  .from(".txt1", { opacity: 0, ease: "power2.inOut" }, 0)
  .add(animateWave, 0); // 애니메이션 시작과 동시에 파도 애니메이션을 실행합니다.

function animateWave() {
  gsap.ticker.add(function (t) {
    waveY -= 1; // 파도의 위치를 천천히 올리도록 조정합니다.

    for (let k = 0; k < nWaves; k++) {
      let p = waves[k],
        offset = ((1 - k / nWaves) * nWaves) / 6,
        pts = "";

      for (let i = -1; i < cw + detail; i += detail) {
        let y = ch - waveY;
        y += Math.sin(i * 0.003 - t / speed + offset) * amp;
        y += Math.sin(i * 0.004 - t / speed + offset) * amp;
        y += Math.sin(i * -0.011 - t / speed + 20 + offset) * amp;
        pts += i.toFixed(2) + "," + y.toFixed(2) + " ";
      }

      gsap.set(p, {
        attr: {
          points: "-20,-20 -20," + ch / 2 + " " + pts + " " + cw + ",-20",
        },
      });
    }
  });
}

window.addEventListener("resize", () => {
  cw = window.innerWidth;
  ch = window.innerHeight;
});

// --------------------------------------------

let select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

const container = select(".sec3-container");
const cuboid = selectAll(".hi__cuboid");
const hiWords = selectAll(".hi__word");
// const base = select('.hi__base-plate');
let winW = 0;
let winH = 0;
let pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

function init() {
  setWinDimensions();
  //   const text2Use = document.querySelector(".text2Use");
  //   text2Use.style.transform = `translate(-50%,0)`;
  //   console.log(text2Use);

  gsap.set(container, { autoAlpha: 1 });

  gsap
    .timeline({ delay: 0.5 })
    .from(".hi__location--lat", {
      x: 100,
      autoAlpha: 0,
      ease: "power4",
      duration: 1,
    })
    .from(
      ".hi__location--long",
      {
        x: -100,
        autoAlpha: 0,
        ease: "power4",
        duration: 1,
      },
      0
    )
    .from(
      cuboid,
      {
        y: winH,
        duration: 3,
        stagger: 0.14,
        ease: "elastic(0.4,0.3)",
      },
      0
    );

  gsap.to(cuboid, {
    rotateX: -360,
    duration: 8,
    repeat: -1,
    ease: "none",
  });

  gsap.fromTo(
    cuboid,
    {
      rotateY: 8,
      rotate: -10,
    },
    {
      rotateY: -8,
      rotate: 10,
      duration: 2.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    }
  );
}

function setWinDimensions() {
  winW = window.innerWidth;
  winH = window.innerHeight;
}

function calcOffset(xPos, yPos) {
  let dX = (2 * (xPos - winW / 2)) / winW;
  let dY = (-2 * (yPos - winH / 2)) / winH;
  return [dX, dY];
}

function followPointer(pX, pY) {
  let nPos = calcOffset(pX, pY); // get cursor position from center
  let nX = nPos[0];
  let nY = nPos[1];
  let positiveX = Math.sqrt(nX * nX);
  let positiveY = Math.sqrt(nY * nY);
  let deltaS = 450 * positiveX;
  let deltaW = 600 * positiveY;
  gsap.to(hiWords, {
    fontStretch: `${550 - deltaS}%`,
    fontWeight: 800 - deltaW,
    duration: 2,
  });
}

window.addEventListener("mousemove", function (event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  followPointer(pointer.x, pointer.y);
});

window.addEventListener("touchmove", function (event) {
  pointer.x = event.touches[0].clientX;
  pointer.y = event.touches[0].clientY;
  followPointer(pointer.x, pointer.y);
});

window.addEventListener("touchstart", function (event) {
  pointer.x = event.touches[0].clientX;
  pointer.y = event.touches[0].clientY;
  followPointer(pointer.x, pointer.y);
});

// window.onload = () => {
// 	init();
// };

init();

window.onresize = setWinDimensions;

// -------------------------------
// let elemets = document.querySelector('svg').children;

// let lines = document.querySelectorAll('.cls-1');
// anime({
//   targets: '.cls-1',
//   translateX: [
//     {value: 270, duration: 1000, easing: 'easeOutSine'},
//     {value: 0, duration: 1000, easing: 'easeOutSine'}
//   ],
//   delay: anime.stagger(200, {grid: [16,10], from: 7}),
//   loop: true
// })

// // let colors = ['#000000', '#ffffff', '#bdbdbd', '#616161'];

// // function getRandomInt(max) {
// //   return Math.floor(Math.random() * Math.floor(max));

// // }

// // var intervalID = window.setInterval(myCallback, 500);

// // function myCallback() {
// //   lines.forEach((element) => {
// //   let newColor = colors[getRandomInt(colors.length)]
// //     $( element ).css( "fill", newColor );
// //   });
// // }