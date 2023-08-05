export const loadingScreen = () => {

  const section3Title = document.querySelector('.loading-title');
  const introBackground1 = document.querySelector('.bg-left');
  const introBackground2 = document.querySelector('.bg-right');
  const introWhiteBackground = document.querySelector('.intro-background-white');


    setTimeout(() => {
      section3Title.style.opacity = '1';
      section3Title.style.transform = 'translate(-50%, -50%)'

      setTimeout(() => {
        introBackground1.style.transform = 'scaleX(.1)';
        introBackground2.style.transform = 'scaleX(.1)';

        setTimeout(() => {
          introBackground1.style.transition = 'all .7s';
          introBackground2.style.transition = 'all .7s';
          introBackground1.style.transform = 'scaleX(1)';
          introBackground2.style.transform = 'scaleX(1)';

          setTimeout(() => {
            introBackground1.style.transformOrigin = 'top center';
            introBackground2.style.transformOrigin = 'top center';

            setTimeout(() => {
              introBackground1.style.transform = 'scaleY(0)';
              introBackground2.style.transform = 'scaleY(0)';

              setTimeout(() => {
                introWhiteBackground.style.transform = 'scaleY(.9)';
                setTimeout(() => {
                  introWhiteBackground.style.transition = 'all .7s';
                  introWhiteBackground.style.transform = 'scaleY(0)';
                },400)
              },1000)
            },600)
          },700)
        }, 300)
      }, 1000);
    },100);


    const images = [...document.querySelectorAll(".loading-images img")];

    function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }

    function map(x, a, b, c, d) {
      return ((x - a) * (d - c)) / (b - a) + c;
    }

    function getMousePosition(e) {
      let posX = e.clientX;
      let posY = e.clientY;

      return {
        x: posX,
        y: posY
      };
    }

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    window.addEventListener("mousemove", function(e) {
      mousePos = getMousePosition(e);
    });

    images.forEach(function(img) {
      let values = { x: 0, y: 0 };
      const xStart = getRandomNumber(16, 64);
      const yStart = getRandomNumber(-16, 64);

      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

      function render() {
        values.x = lerp(
          values.x,
          map(mousePos.x, 0, window.innerWidth, -xStart, xStart),
          0.07
        );

        values.y = lerp(
          values.y,
          map(mousePos.y, 0, window.innerHeight, -yStart, yStart),
          0.07
        );

        img.style.transform = `translate(${values.x}px, ${values.y}px)`;

        requestAnimationFrame(render);
      }

      render();
    });
};