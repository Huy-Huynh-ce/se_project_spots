const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add("modal__input_type_error");
  errorMessageEl.textContent = errorMessage;
};

const hideInputError = (formEl, inputEl) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove("modal__input_type_error");

  errorMessageEl.textContent = "";
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

function toggleButtonState(inputList, buttonEl) {
  const isInvalid = hasInvalidInput(inputList);
  console.log(isInvalid);
  if (isInvalid) {
    buttonEl.disabled = true;
    buttonEl.classList.add("modal__submit-button_type-disabled");
  } else {
    buttonEl.disabled = false;
    buttonEl.classList.remove("modal__submit-button_type-disabled");
  }
}

const setEventListener = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__submit-button");

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formEl) => {
    setEventListener(formEl);
  });
};
enableValidation();
