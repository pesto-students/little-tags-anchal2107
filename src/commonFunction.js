function toggleHamburgerMenu(blnClose) {
  const divHamburgerMenu = document.getElementById("hamburgerMenu");
  if (divHamburgerMenu) {
    if (blnClose) {
      divHamburgerMenu.style.display = "none";
    } else {
      divHamburgerMenu.style.display = "flex";
    }
  }
}

function openSignInModal() {
  const divSignUpModal = document.getElementById("signUpModal");
  divSignUpModal.style.display = "block";
}

export { toggleHamburgerMenu, openSignInModal };
