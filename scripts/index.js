const editProfileBtn = document.querySelector(".avatar__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);

const newPostBtn = document.querySelector(".avatar__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-open");
});
editProfileModalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-open");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-open");
});
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-open");
});
