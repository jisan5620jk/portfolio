//Color Change

function colorChange(newTheme) {
  let oldTheme = localStorage.getItem("theme");
  document.body.classList.remove(oldTheme);
  localStorage.setItem("theme", newTheme);
  let saveTheme = localStorage.getItem("theme");
  document.body.classList.add(saveTheme);
}

function applyStoredTheme() {
  let storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.classList.add(storedTheme);
  }
}

document.addEventListener("DOMContentLoaded", applyStoredTheme);

function themeToggle() {
  colorChange("illusion");
}

function themeToggle2() {
  colorChange("farari-red");
}
function themeToggle3() {
  colorChange("bee-yellow");
}
function themeToggle4() {
  colorChange("pumpkin-orange");
}
function themeToggle5() {
  colorChange("ocean-green");
}
function themeToggle6() {
  colorChange("silver-sand");
}
function themeToggle7() {
  colorChange("serulean");
}
function themeToggle8() {
  colorChange("sky-blue");
}
function themeToggle9() {
  colorChange("lime-green");
}
function themeToggle10() {
  colorChange("purple");
}

//Background Change

function bgChange(newBg) {
  let oldBg = localStorage.getItem("bg");
  document.body.classList.remove(oldBg);
  localStorage.setItem("bg", newBg);
  let saveBg = localStorage.getItem("bg");
  document.body.classList.add(saveBg);
}

function applyStoredBg() {
  let storedBg = localStorage.getItem("bg");
  if (storedBg) {
    document.body.classList.add(storedBg);
  }
}

document.addEventListener("DOMContentLoaded", applyStoredBg);

function ThemeToggle8() {
  bgChange("image");
}

function ThemeToggle() {
  bgChange("solid");
}

function ThemeToggle2() {
  bgChange("light-navy");
}

function ThemeToggle3() {
  bgChange("video");
}

function ThemeToggle4() {
  bgChange("video2");
}

function ThemeToggle5() {
  bgChange("video3");
}

function ThemeToggle6() {
  bgChange("video4");
}

function ThemeToggle7() {
  bgChange("video5");
}


//Open Settings

$(document).ready(function () {
  $(".close_btn, .settings_sidebar_overlay, .color-btn button, .bg-btn button").on(
    "click",
    function () {
      $(".settings_sidebar").removeClass("active");
      $(".settings_sidebar_overlay").removeClass("active");
    }
  );

  $(".settings_btn").on("click", function () {
    $(".settings_sidebar").addClass("active");
    $(".settings_sidebar_overlay").addClass("active");
  });
});
