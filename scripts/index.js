const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
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
const profileNameInput = editProfileForm.elements["profile-name"];
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description"
);
const profileNameEl = document.querySelector(".avatar__name");
const profileDescriptionEl = document.querySelector(".avatar__description");
const editProfileSubmitBtn = editProfileModal.querySelector(
  ".modal__submit-button"
);

const newPostBtn = document.querySelector(".avatar__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostForm = document.forms["new-post-form"];
const newPostImageLink = newPostForm.querySelector("#image-link");
const newPostCaption = newPostForm.querySelector("#caption");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-button");

const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal.querySelector(
  ".modal__close-button_type-preview"
);
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

previewCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

const cardTemplate = document
  .querySelector("#template")
  .content.querySelector(".card");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");

  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewCaptionEl.textContent = data.name;
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-open");
    closeModal(openedModal);
  }
}
function handleOverlayClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-open");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOverlayClick);
}
function closeModal(modal) {
  modal.classList.remove("modal_is-open");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOverlayClick);
}

editProfileBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(
    editProfileForm,
    [profileNameInput, profileDescriptionInput],
    settings
  );
  toggleButtonState(
    [profileNameInput, profileDescriptionInput],
    editProfileSubmitBtn,
    settings
  );
  openModal(editProfileModal);
});

editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileForm(Evt) {
  Evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  disabledButton(editProfileSubmitBtn, settings);
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileForm);

function handleNewPostForm(evt) {
  evt.preventDefault();

  const newPostInputValue = {
    name: newPostCaption.value,
    link: newPostImageLink.value,
  };

  renderCard(newPostInputValue);
  evt.target.reset();
  resetValidation(
    editProfileForm,
    [profileNameInput, profileDescriptionInput],
    settings
  );

  disabledButton(newPostSubmitBtn, settings);
  closeModal(newPostModal);
}
newPostForm.addEventListener("submit", handleNewPostForm);

function renderCard(item, method = "prepend") {
  const cardElement = getCardElement(item);
  cardList[method](cardElement);
}

initialCards.forEach(function (item) {
  renderCard(item, "append");
});
