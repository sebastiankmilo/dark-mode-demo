const checkbox = document.querySelector("#checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}

//configuro el toggle entre dark mode y light mode

checkbox.addEventListener("change", function (event) {
  console.log(this.checked);
  if (this.checked) {
    console.log(this.checked);
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
    console.log(this.checked);
  }
});
/*
const checkbox = document.querySelector("#checkbox");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
*/
