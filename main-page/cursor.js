export const cusorAction = () => {
  let cursor = document.querySelector('.cursor');

  document.addEventListener("mousemove", function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  })

  const section1Hover = document.querySelector('.Text a');

  section1Hover.addEventListener('mouseover', function() {
    console.log("hovererere");
  });
}