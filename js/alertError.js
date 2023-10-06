const alertError = {
  element: document.querySelector("#error-msg"),
  open() {
    alertError.element.classList.add("open");
  },
  close() {
    alertError.element.classList.remove("open");
  },
};

export { alertError };
