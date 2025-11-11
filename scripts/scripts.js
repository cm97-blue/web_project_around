let editProfile = document.getElementById("edit-boton");
let closeForm = document.getElementById("cross");
let form = document.getElementById("editform");

function actForm() {
  form.classList.remove("popup");
}

editProfile.addEventListener("click", actForm);

function desForm() {
  form.classList.add("popup");
}
closeForm.addEventListener("click", desForm);

let borrar = document.querySelector("content-profile");

let blanca = document.getElementById("profile-name").innerText;
let liz = document.getElementById("hobbie-profile").innerText;

let formName = document.getElementById("form-name");
let formHobbie = document.getElementById("form-hobbie");

formName.value = blanca;
formHobbie.value = liz;
