var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  dot = select('#dot'),
  pContainer = select('#pContainer'),
  particlePool = [],
  numParticles = 90,
  particleCount = 0,
  mainLogo = select('#mainLogo'),
  mainLogoPath = mainLogo.getAttribute('d'),
  particleColorArray = ['#eeeeee', '#bdbdbd', '#757575', '#424242', '#000', '#fafafa', '#424242'],
  mainTl = new TimelineMax()

TweenMax.set('svg', {
  visibility: 'visible'
})

var logoBezier = MorphSVGPlugin.pathDataToBezier(mainLogoPath);
//console.log(JSON.stringify(logoBezier))

function createParticles() {

  var i = numParticles,
    p;
  while (--i > -1) {

    p = document.createElementNS(xmlns, 'use');
    pContainer.appendChild(p);
    p.setAttributeNS(xlinkns, "xlink:href", '#particle');
    p.setAttributeNS(null, 'fill', particleColorArray[i % particleColorArray.length]);
    p.setAttribute('class', "particle");

    var val = randomBetween(10, 50) / 10,
      origin = randomBetween(40, 60) + '% ' + randomBetween(40, 60) + '%';
    TweenMax.set(p, {
      scale: val,
      transformOrigin: '50% 50%'
    })

    var t = TweenMax.to(p, val * 3.4, {
      bezier: {
        type: "cubic",
        values: logoBezier,
        autoRotate: false
      },
      repeat: -1,
      ease: Linear.easeNone
    })

    mainTl.add(t, i / 10);
    particlePool.push(p);

  }
  mainTl.seek(100)
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const portfolioLogo = () => {
  createParticles();
}

TweenMax.set('#wholeLogo', {
  x: 40
})

TweenMax.globalTimeScale(0.75)