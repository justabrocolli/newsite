
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("open-popup-button").addEventListener("click", sign_up_popup);
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

