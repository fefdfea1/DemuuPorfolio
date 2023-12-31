function cursor (){
  const custom_cursor = document.getElementById("custom_cursor");
  const body = document.querySelector("body");

  function custom_show_cursor(e) {
    if (custom_cursor.classList.contains('custom_cursor_hidden')) {
      custom_cursor.classList.remove('custom_cursor_hidden');
    }
    custom_cursor.classList.add('custom_cursor_visible');
  }

  function custom_hide_cursor(e) {
    if (custom_cursor.classList.contains('custom_cursor_visible')) {
      custom_cursor.classList.remove('custom_cursor_visible');
    }
    custom_cursor.classList.add('custom_cursor_hidden');
  }

  function custom_mousemove(e) {
    custom_show_cursor();
    let custom_cursor_width = custom_cursor.offsetWidth * 0.5;
    let custom_cursor_height = custom_cursor.offsetHeight * 0.5;
    let custom_cursor_x = e.clientX - custom_cursor_width;
    let custom_cursor_y = e.clientY - custom_cursor_height;
    let custom_cursor_pos = `translate(${custom_cursor_x}px, ${custom_cursor_y}px)`;
    custom_cursor.style.transform = custom_cursor_pos;
  }
  window.addEventListener('mousemove', custom_mousemove);
  body.addEventListener('mouseleave', custom_hide_cursor);

  function custom_hover_cursor(e) {
    custom_cursor.classList.add('custom_cursor_hover');
  }

  function custom_unhover_cursor(e) {
    custom_cursor.classList.remove('custom_cursor_hover');
  }
  document.querySelectorAll('p,span,h1,h2,h3,h4,h5').forEach(item => {
    item.addEventListener('mouseover', custom_hover_cursor);
    item.addEventListener('mouseleave', custom_unhover_cursor);
  })


  function custom_hover_cursor2(e) {
    custom_cursor.classList.add('custom_cursor_hover2');
  }

  function custom_unhover_cursor2(e) {
    custom_cursor.classList.remove('custom_cursor_hover2');
  }
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseover', custom_hover_cursor2);
    item.addEventListener('mouseleave', custom_unhover_cursor2);
  })
  // document.querySelectorAll('input').forEach(item => {
  //   item.addEventListener('mouseover', custom_hover_cursor);
  //   item.addEventListener('mouseleave', custom_unhover_cursor);
  // })
  // document.querySelectorAll('button').forEach(item => {
  //   item.addEventListener('mouseover', custom_hover_cursor);
  //   item.addEventListener('mouseleave', custom_unhover_cursor);
  // })
  // document.querySelectorAll('.mycustomclass').forEach(item => {
  //   item.addEventListener('mouseover', custom_hover_cursor);
  //   item.addEventListener('mouseleave', custom_unhover_cursor);
  // })
  
}

export const cursorAction = () => {
  cursor();
};