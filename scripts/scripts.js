let editProfile = document.getElementById("edit-boton");
let closeForm = document.getElementById("cross");
let form = document.getElementById("editform");

let profile = document.getElementById("profile-name");
let hobbie = document.getElementById("hobbie-profile");

function actForm() {
  form.classList.remove("popup");
}

editProfile.addEventListener("click", actForm);

function desForm() {
  form.classList.add("popup");
}
closeForm.addEventListener("click", desForm);
