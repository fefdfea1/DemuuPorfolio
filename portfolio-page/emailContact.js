let enterMessage = false;

function SendMail() {
  const nameBx = document.querySelector('.send-namebx input').value.trim();
  const nameBxAlert = document.querySelector('.send-namebx span');

  const emailBx = document.querySelector('.send-emailbx input').value.trim();
  const emailBxAlert = document.querySelector('.email-alert1');
  const emailBxAlert2 = document.querySelector('.email-alert2');

  const messageBx = document.querySelector('.send-messagebx textarea').value.trim();
  const messageBxAlert = document.querySelector('.send-messagebx span');

  const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  // name 입력했는지 여부
  if(nameBx === "") {
    nameBxAlert.style.display = 'inline-block';
    return;
  } else {
    nameBxAlert.style.display = 'none';
  }
  // 이메일 입력했는지 여부
  if (emailBx === "") {
    emailBxAlert.style.display = 'inline-block';
    return;
  } else {
    emailBxAlert.style.display = 'none';
  }
  if (!reg_email.test(emailBx)){
    emailBxAlert2.style.display = 'inline-block';
    return;
  } else {
    emailBxAlert2.style.display = 'none';
  }

  // name 입력했는지 여부
  if (messageBx === "") {
    messageBxAlert.style.display = 'inline-block';
    return;
  } else {
    messageBxAlert.style.display = 'none';
  }

  enterMessage = !(nameBx === "" || emailBx === "" || messageBx === "");

  if(nameBx) {
    nameBxAlert.style.display = 'none';
  } else if (emailBx) {
    emailBxAlert.style.display = 'none';
  } else if (messageBx) {
    messageBxAlert.style.display = 'none';
  }
  
  let params = {
    from_name : document.querySelector('#fullName').value,
    email_id : document.querySelector('#email_id').value,
    message : document.querySelector('#message').value
  }
  emailjs.send("service_jy4uocr", "template_wathvzm", params);
}


function SendMailClick(){
  let click = true;
  const contactBtn = document.querySelector('.contact-btn');
  const sendMail = document.querySelector('.send-mail');
  
  contactBtn.addEventListener('click', function(){
    if(click){
      if (window.innerWidth > 440) {
        sendMail.style.transform = 'translate(-50%, -50%)';
      } else if (window.innerWidth <= 440) {
        sendMail.style.transform = 'translate(-50%, -32%)';
      }
      click = false;
    } else {
      sendMail.style.transform = 'translate(-50%, 100%)';
      click = true;
    }
  });
  
  const Xbtn = document.querySelector('.x-btn');
  Xbtn.addEventListener('click', function(){
    sendMail.style.transform = 'translate(-50%, 100%)';
    click = true;
  });
  
  const sendMailBtn = document.querySelector('.send-mailBtn button');
  const sendMailBtnTruck = document.querySelector('.send-mailBtn i');
  const inputReset = document.querySelector('.send-namebx input');
  const inputReset2 = document.querySelector('.send-emailbx input');
  const textReset = document.querySelector('.send-messagebx textarea');
  sendMailBtn.addEventListener('click', () => {
    if(enterMessage == true) {
      sendMailBtn.style.setProperty('--y', '25px');
      sendMailBtn.style.setProperty('--rocate', '90deg');

      sendMailBtnTruck.style.opacity = '1';
      setTimeout(() => {
        sendMailBtnTruck.style.transform = 'translate(2300%, 0)';

        setTimeout(() => {
          sendMailBtnTruck.style.opacity = '0';

          setTimeout(() => {
            sendMail.style.transform = 'translate(-50%, 100%)';
            click = true;
          },800);

          setTimeout(() => {
            sendMailBtnTruck.style.transform = 'translate(0, 0)';
            sendMailBtn.style.setProperty('--y', '0');
            sendMailBtn.style.setProperty('--rocate', '0');
            inputReset.value = "";
            inputReset2.value = "";
            textReset.value = "";
            enterMessage = false;
          }, 2000);
        },1200);

      },500);
    }
  })

}
SendMailClick();