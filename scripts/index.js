let editProfile = document.getElementById("edit-boton");
let closeForm = document.getElementById("cross");
let EditForm = document.getElementById("editform");

function actForm() {
  EditForm.classList.remove("popup");
}

editProfile.addEventListener("click", actForm);

function desForm() {
  EditForm.classList.add("popup");
}
closeForm.addEventListener("click", desForm);

let TextName = document.getElementById("profile-name").innerText;
let TextHobbie = document.getElementById("hobbie-profile").innerText;

const formName = document.getElementById("form-name");
const formHobbie = document.getElementById("form-hobbie");

formName.value = TextName;
formHobbie.value = TextHobbie;

const form = document.getElementById("formulario");
const buttonSave = document.getElementById("form-buttonsave");

const inputs = form.querySelectorAll("input, textarea");

function formulario() {
  let completo = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      completo = false;
    }
  });

  if (completo) {
    buttonSave.classList.add("popup__container__bottomsave");
  } else {
    buttonSave.classList.remove("popup__container__bottomsave");
  }
}

form.addEventListener("input", formulario);
formulario();

let formElement = document.querySelector("#formulario");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = formElement.querySelector(".popup__container-profile");
  let jobInput = formElement.querySelector(".popup__container-hobbie");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  let profileName = document.getElementById("profile-name");
  let profileJob = document.getElementById("hobbie-profile");

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function closeBotton() {
  EditForm.classList.add("popup");
}
buttonSave.addEventListener("click", closeBotton);
