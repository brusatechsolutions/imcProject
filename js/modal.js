export const modal = {
  buttonClose: document.querySelector("button.close"),
  modalWraper: document.querySelector(".modal-wrapper"),
  modalMsg: document.querySelector("h2 span"),

  close() {
    this.modalWraper.classList.remove("open");
  },
  open() {
    this.modalWraper.classList.add("open");
  },
};

modal.buttonClose.onclick = () => {
  modal.close();
};

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    modal.close();
  }
};
window.addEventListener("keydown", handleKeyDown);
