var link = document.querySelector(".contacts__button"),
    popup = document.querySelector(".feedback"),
    body = document.querySelector("body"),
    close = document.querySelector(".modal-close"),
    namel = popup.querySelector("[name=name]"),
    mail = popup.querySelector("[name=feedback-email]"),
    text = popup.querySelector("[name=feedback-email]"),
    send = popup.querySelector("textarea"),
    form = popup.querySelector("form"),
    storage = localStorage.getItem("namel");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  body.classList.add("modal-show");
  if (storage) {
    namel.value = storage;
    mail.focus();
  } else {
    namel.focus();
  }
})

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  body.classList.remove("modal-show");
})

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (body.classList.contains("modal-show")) {
      body.classList.remove("modal-show");
    }
  }
})

form.addEventListener("submit", function(evt) {
  if (!namel.value || !mail.value) {
    evt.preventDefault();
    if (!namel.value) {
      namel.classList.add("error");
    } else {
      namel.classList.remove("error");
    }
    if (!mail.value) {
      mail.classList.add("error");
    } else {
      mail.classList.remove("error");
    }
  } else {
    localStorage.setItem("namel", namel.value);
    body.classList.remove("modal-show");
  }

})
