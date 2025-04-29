const initalCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg ",
  },
  {
    name: "Restaurant terrace ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg ",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg ",
  },
];

const editProfileBtn = document.querySelector(".avatar__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = document.forms["profile-form"];
const profileNameInput = editProfileModal.querySelector("#profile-name");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description"
);
const profileNameEl = document.querySelector(".avatar__name");
const profileDescriptionEl = document.querySelector(".avatar__description");

const newPostBtn = document.querySelector(".avatar__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostForm = document.forms["new-post-form"];
const newPostImageLink = newPostForm.querySelector("#image-link");
const newPostCaption = newPostForm.querySelector("#caption");

function openModal(modal) {
  modal.classList.add("modal_is-open");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-open");
}

editProfileBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
  //  editProfileModal.classList.add("modal_is-open");
});
editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
  //  editProfileModal.classList.remove("modal_is-open");
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
  //  newPostModal.classList.add("modal_is-open");
});
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
  //  newPostModal.classList.remove("modal_is-open");
});
function handleEditProfileForm(Evt) {
  Evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
  //  editProfileModal.classList.remove("modal_is-open");
}
editProfileForm.addEventListener("submit", handleEditProfileForm);

function handleNewPostForm(evt) {
  evt.preventDefault();
  console.log(newPostImageLink.value);
  console.log(newPostCaption.value);
  closeModal(newPostModal);
  //  newPostModal.classList.remove("modal_is-open");
}
newPostForm.addEventListener("submit", handleNewPostForm);

initalCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
