let number = [2, 3, 4, 5, 8, 10, 12, 15, 18, 19, 20, 24, 26, 28];
let mainNoti = document.getElementsByClassName("notification")[0];
mainNoti.style.display = "none";
setTimeout(() => {
  if (mainNoti.style.display == "none") {
    mainNoti.style.display = "block";
  }
}, 30000);
setInterval(() => {
  const randomIndex = Math.floor(Math.random() * number.length);
  mainNoti.getElementsByTagName("p")[0].innerHTML = `${number[randomIndex]}`;
}, 30000);

// function for show time
function showTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes().toString().padStart(2, "0");
  let time = document.getElementById("time");
  time.innerHTML = hours + ":" + minutes;
  let setTime = document.getElementsByClassName("show-time-date")[0];
  setTime.querySelector("h3").innerHTML = hours + ":" + minutes;
}
setInterval(showTime, 1000);

// date function
let monthArray = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
let day = date.getDate().toString().padStart(2, "0");
let month = (date.getMonth() + 1).toString().padStart(2, "0");
let year = date.getFullYear();
let datetxt = document.getElementById("date");
datetxt.innerHTML = `${day}-${month}-${year}`;
let smonth = date.getMonth();
let setDate = document.getElementById("s-date");
setDate.innerHTML = `${day}-${monthArray[smonth]}-${year}`;

// range function
let range = document.getElementById("range");
let output = document.getElementById("output");

range.addEventListener("input", function () {
  output.innerHTML = range.value;
});

// range slider for brightness
rangeInput = document.getElementById("range");
container = document.getElementsByClassName("container")[0];

rangeInput.addEventListener("change", function () {
  container.style.filter = "brightness(" + rangeInput.value + "%)";
});

// notification-center-hide-show
let noti = document.getElementById("notify");
let wivol = document.getElementById("wi-vol");
wivol.addEventListener("click", () => {
  if (noti.style.bottom == "20px") {
    noti.style.bottom = "-530px";
  } else {
    noti.style.bottom = "20px";
  }
});

// change-the-percentage
let baticon = Array.from(document.getElementsByClassName("bat-icon"));
let per = document.getElementById("per%");
CloseBatteryicon = (numbert) => {
  if (numbert == 100) {
    for (i in baticon) {
      if (i == 0 || i == 5) {
        baticon[i].style.display = "block";
      } else {
        baticon[i].style.display = "none";
      }
    }
  }
};
BatteryPercentageAll = (numbert) => {
  for (i in baticon) {
    if (numbert == 98) {
      if (i == 0 || i == 5) {
        baticon[i].style.display = "block";
      } else {
        baticon[i].style.display = "none";
      }
    } else if (numbert == 80) {
      if (i == 1 || i == 6) {
        baticon[i].style.display = "block";
      } else {
        baticon[i].style.display = "none";
      }
    } else if (numbert == 58) {
      if (i == 2 || i == 7) {
        baticon[i].style.display = "block";
      } else {
        baticon[i].style.display = "none";
      }
    } else if (numbert == 28) {
      if (i == 3 || i == 8) {
        baticon[i].style.display = "block";
      } else {
        baticon[i].style.display = "none";
      }
    } else if (numbert == 10) {
      if (i == 4 || i == 9) {
        baticon[i].style.display = "block";
        clearInterval(batterypercentage);
      } else {
        baticon[i].style.display = "none";
      }
    }
  }
};

let number1 = 2;
let numbert = 100;
CloseBatteryicon(numbert);
let batterypercentage = setInterval(() => {
  numbert = numbert - number1;
  BatteryPercentageAll(numbert);
  per.innerHTML = `${numbert}%`;
  number1 += 2;
}, 20000);

// notification-icon-color
let iconColor = document.querySelectorAll(".fun-box-1");
let iconColor2 = document.querySelectorAll(".fun-box-2");

for (let i = 0; i < iconColor.length; i++) {
  iconColor[i].addEventListener("click", () => {
    iconColor[i].classList.toggle("notification-click-color");
    iconColor[i].classList.remove("noti-hover");
  });
}
for (let i = 0; i < iconColor2.length; i++) {
  iconColor2[i].addEventListener("click", () => {
    iconColor2[i].classList.toggle("notification-click-color");
    iconColor2[i].classList.remove("noti-hover");
  });
}

// ends

// =========================================================

// open setting page
let spin = document.getElementById('set-sp');
let settingPage = document.getElementById('setting-page');
let settingMainicon = document.getElementById('setting-main-icon');
let closeAllsetPage = document.getElementById("close-set-page");
let videoSrc = document.getElementById('video-src');
let maiSetPage = document.getElementById("mai-set-pg");

FirstOpenSetpage = ()=>{
  for (i = 0; i < 10; i++) {
    if (i == 0) {
      RsMp[i].style.display = "block";
    } else {
      RsMp[i].style.display = "none";
    }
  }
}
spin.addEventListener('click', ()=>{
  spin.classList.add('spin')
  setTimeout(()=>{
    spin.classList.remove('spin');
    if(noti.style.bottom =='20px'){
      noti.style.bottom = '-530px'
    }
    videoSrc.style.display = "none";
    closeAllsetPage.style.display = "block";
    settingPage.style.display = "block";
    settingMainicon.classList.add('spin');
  },800)
  setTimeout(()=>{
    settingMainicon.classList.remove('spin');
    settingPage.style.display = "none";
    maiSetPage.style.display = "block"
    closeAllsetPage.classList.add("setting-main-header-color")
    RsMp[0].style.display = "block";
    FirstOpenSetpage()
    RpMh.innerHTML = "System"

  },1300)
})

// close-the-page

let closePage = document.getElementById("close-pg");
closePage.addEventListener("click", () => {
  closeAllsetPage.style.display = "none";
  maiSetPage.style.display = "none";
  videoSrc.style.display = "block";
});

// apply cursor class
let leftSettingAllfun = document.querySelectorAll(".left-side-all-funct");
console.log(leftSettingAllfun);
for (i = 0; i < leftSettingAllfun.length; i++) {
  leftSettingAllfun[i].classList.add("cursor");
}
// change setting page throught left page option
let RsMp = document.getElementsByClassName("right-side-main-setting-page");
let RpMh = document.getElementsByClassName("right-page-main-heading")[0].getElementsByTagName("h1")[0];

// //open-system
leftSettingAllfun[0].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 0) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "System"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});

// open-bluetooth
leftSettingAllfun[1].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 1) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Bluetooth & devices"
      // RpMh.getElementsByTagName("h1")[0].innerHTML = "Bluetooth & devices"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
let blOn = Array.from(document.getElementsByClassName("bl-on"));
let blOff = Array.from(document.getElementsByClassName("bl-off"));
let blTogglename = Array.from(document.getElementsByClassName("bl-toggle"));
for (i = 0; i < blOn.length; i++) {
  blOn[i].style.display = "none";
}
on_off = (value) => {
  if (blOff[value].style.display == "block") {
    blOn[value].style.display = "block";
    blOn[value].classList.add("on_off_icon-color");
    blOff[value].style.display = "none";
    blTogglename[value].getElementsByTagName("p")[0].innerText = "on";
  } else {
    blOn[value].style.display = "none";
    blOff[value].style.display = "block";
    blTogglename[value].getElementsByTagName("p")[0].innerText = "off";
  }
};
blTogglename[0].onclick = function () {
  on_off(0);
};
blTogglename[1].onclick = function () {
  on_off(1);
};
blTogglename[2].onclick = function () {
  on_off(2);
};
blTogglename[3].onclick = function () {
  on_off(3);
};
// open network and internet
leftSettingAllfun[2].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 2) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Network & internet"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// open personalization
leftSettingAllfun[3].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 3) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Personalization"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// Change-the-theme-window
let themes = Array.from(document.getElementsByClassName("imgCarousel"));
let MainWIntheme = document.getElementById("MainWIntheme");
let mainScreenCOlor = document.getElementById("mainScreenColor");
let r = document.querySelector(":root");
let AllIcons = Array.from(document.querySelectorAll("i"));
for (let i of AllIcons) {
  i.classList.add("icon-main-color");
}

updateTheme = (event) => {
  let chngsrc;
  let theme = event.target;
  MainWIntheme.src = theme.src;
};
other_theme_1 = () => {
  r.style.setProperty("--taskbar-main-color", "#e2edf9");
  r.style.setProperty("--text-primary-color", "#484a4e");
  r.style.setProperty("--window-hover-color", "#f8fbfe");
  r.style.setProperty("--notification-icon-color", "#f6f8f9");
  r.style.setProperty("--notification-hover-color", "#edf4fa");
  r.style.setProperty("--setting-main-color", "#eff4f9");
  r.style.setProperty("--setting-function-color", "#fdfdfd");
  r.style.setProperty("--setting-hover-color", "#e6ebf0");
};
other_theme_2 = () => {
  r.style.setProperty("--taskbar-main-color", "#1d2134");
  r.style.setProperty("--text-primary-color", "snow");
  r.style.setProperty("--window-hover-color", "#283536");
  r.style.setProperty("--notification-icon-color", "#59595b");
  r.style.setProperty("--notification-hover-color", "#3c3e43");
  r.style.setProperty("--setting-main-color", "#1e2024");
  r.style.setProperty("--setting-function-color", "#292b32");
  r.style.setProperty("--setting-hover-color", "#3c3e43");
};
light_theme = () => {
  r.style.setProperty("--window-screen-color", "#2980B9, #6DD5FA, #ffffff");
};
dark_theme = () => {
  r.style.setProperty("--window-screen-color", "#000428, #004e92");
};
purple_theme = () => {
  r.style.setProperty("--window-screen-color", "#5614B0 ,#dbd65c");
  r.style.setProperty("--taskbar-main-color", "#1a222f");
};
gold_theme = () => {
  r.style.setProperty("--window-screen-color", "#3e5151 ,#decba4");
  r.style.setProperty("--taskbar-main-color", "#e2edf9");
};
red_theme = () => {
  r.style.setProperty("--window-screen-color", "#0099F7 ,#F11712");
  r.style.setProperty("--taskbar-main-color", "#1a222f");
};
lightBlue_theme = () => {
  r.style.setProperty("--window-screen-color", "#076585 ,#fff");
  r.style.setProperty("--taskbar-main-color", "#e2edf9");
};
themes.forEach(function (theme) {
  theme.addEventListener("click", updateTheme);
});
themes[0].onclick = function () {
  light_theme(), other_theme_1();
};
themes[1].onclick = function () {
  dark_theme(), other_theme_2();
};
themes[2].onclick = function () {
  purple_theme(), other_theme_2();
};
themes[3].onclick = function () {
  gold_theme(), other_theme_1();
};
themes[4].onclick = function () {
  red_theme(), other_theme_2();
};
themes[5].onclick = function () {
  lightBlue_theme(), other_theme_1();
};
// open Apps
leftSettingAllfun[4].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 4) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Apps"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// open Account
leftSettingAllfun[5].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 5) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Account"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// open Time & language
leftSettingAllfun[6].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 6) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Time & language "
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// open Gaming
leftSettingAllfun[7].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 7) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Gaming"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// Open-Accessibility
leftSettingAllfun[8].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 8) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Accessibility"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});
// Open-privacy & Security
leftSettingAllfun[9].addEventListener("click", () => {
  for (i = 0; i < 10; i++) {
    if (i == 9) {
      RsMp[i].style.display = "block";
      RpMh.innerHTML = "Privacy & security"
    } else {
      RsMp[i].style.display = "none";
    }
  }
});

// Window-taskbar-change-all-apps
let taskbarAllappBtn = document.getElementsByClassName("all-apps-btn");
let TaskbarChnge = document.getElementById("Taskbar-Chnge");
let TaskbarChnge2 = document.getElementById("Taskbar-Chnge-2");
let winIcon = document.getElementById("win-icon");
let TaskBarFunPanel = document.getElementById("TaskBar-Fun-panel");
taskbarAllappBtn[0].addEventListener("click", ()=>{
  TaskbarChnge.style.transform = "translate(-609px, 0)";
  TaskbarChnge2.style.left = "35px"
})
taskbarAllappBtn[2].addEventListener("click", ()=>{
  TaskbarChnge2.style.left = "643px"
  TaskbarChnge.style.transform = "translate(0, 0)";
})
winIcon.addEventListener("click", ()=>{
  if(TaskBarFunPanel.style.bottom == "-860px"){
   TaskBarFunPanel.style.bottom = "20px"
  }
  else {
    TaskBarFunPanel.style.bottom = "-860px"
  }
})