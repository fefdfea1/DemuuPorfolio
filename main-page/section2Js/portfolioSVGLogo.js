const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";
const select = function(s) {
  return document.querySelector(s);
};
const pContainer = select('#pContainer');
const particlePool = [];
const numParticles = 90;
const mainLogo = select('#mainLogo');
const mainLogoPath = mainLogo.getAttribute('d');
const particleColorArray = ['#eeeeee', '#bdbdbd', '#757575', '#424242', '#000', '#fafafa', '#424242'];
const mainTl = new TimelineMax();

TweenMax.set('svg', {
  visibility: 'visible'
});

const logoBezier = MorphSVGPlugin.pathDataToBezier(mainLogoPath);

function createParticles() {
  let i = numParticles;
  let p;
  while (--i > -1) {
    p = document.createElementNS(xmlns, 'use');
    pContainer.appendChild(p);
    p.setAttributeNS(xlinkns, "xlink:href", '#particle');
    p.setAttributeNS(null, 'fill', particleColorArray[i % particleColorArray.length]);
    p.setAttribute('class', "particle");

    const val = randomBetween(10, 50) / 10;
    // const origin = randomBetween(40, 60) + '% ' + randomBetween(40, 60) + '%';
    TweenMax.set(p, {
      scale: val,
      transformOrigin: '50% 50%'
    });

    const t = TweenMax.to(p, val * 3.4, {
      bezier: {
        type: "cubic",
        values: logoBezier,
        autoRotate: false
      },
      repeat: -1,
      ease: Linear.easeNone
    });

    mainTl.add(t, i / 10);
    particlePool.push(p);
  }
  mainTl.seek(100);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const portfolioLogo = () => {
  createParticles();
};

TweenMax.set('#wholeLogo', {
  x: 40
});

TweenMax.globalTimeScale(0.75);