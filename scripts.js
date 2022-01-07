const navToggleBtn = document.querySelector(`.toggle-btn`);
const navBarLinks = document.querySelector(`.navbar-links`);

navToggleBtn.addEventListener(`click`, () => {
  navBarLinks.classList.toggle(`active`);
});
