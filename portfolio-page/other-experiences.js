function _class(name){
  return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    
  });
}

let tabPanes2 = _class("th2")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes2.length;i++){
  tabPanes2[i].addEventListener("click",function(){
    _class("th2")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes2[i].classList.add("active");
    
    _class("tc2")[0].getElementsByClassName("active")[0].classList.remove("active");
    _class("tc2")[0].getElementsByTagName("div")[i].classList.add("active");
    
  });
}

// section5 phone version
let tabHeader = document.getElementsByClassName("phone-tab-header")[0];
let tabBody = document.getElementsByClassName("phone-tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("phone-tab-active")[0].classList.remove("phone-tab-active");
    tabsPane[i].classList.add("phone-tab-active");
    tabBody.getElementsByClassName("phone-tab-active")[0].classList.remove("phone-tab-active");
    tabBody.getElementsByTagName("div")[i].classList.add("phone-tab-active");
  });
}


let tabHeader2 = document.getElementsByClassName("pth2")[0];
let tabBody2 = document.getElementsByClassName("ptb2")[0];

let tabsPane2 = tabHeader2.getElementsByTagName("div");

for(let i=0;i<tabsPane2.length;i++){
  tabsPane2[i].addEventListener("click",function(){
    tabHeader2.getElementsByClassName("phone-tab-active")[0].classList.remove("phone-tab-active");
    tabsPane2[i].classList.add("phone-tab-active");
    tabBody2.getElementsByClassName("phone-tab-active")[0].classList.remove("phone-tab-active");
    tabBody2.getElementsByTagName("div")[i].classList.add("phone-tab-active");
  });
}