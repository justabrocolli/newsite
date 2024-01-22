
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("open-popup-button").addEventListener("click", sign_up_popup);
  document.getElementById("open-login-popup-button").addEventListener("click", login_popup);
});

function sign_up_popup() {
  let popup = document.getElementById("show-form");
  if (popup) {
    popup.classList.add("form-opened");
  }
}

function sign_up_close() {
  let popup = document.getElementById("show-form");
  if (popup) {
    popup.classList.remove("form-opened");
  }
}

//log in form
function login_popup() {
  let loginPopup = document.getElementById("login_form");
  if (loginPopup) {
    loginPopup.classList.add("login_opened");
  }
}

function login_popup_close() {
  let loginPopup = document.getElementById("login_form");
  if (loginPopup) {
    loginPopup.classList.remove("login_opened");
  }
}

