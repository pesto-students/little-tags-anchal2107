export function toggleHamburgerMenu(blnClose) {
  const divHamburgerMenu = document.getElementById("hamburgerMenu");
  if (divHamburgerMenu) {
    if (blnClose) {
      divHamburgerMenu.style.display = "none";
    } else {
      divHamburgerMenu.style.display = "flex";
    }
  }
}
