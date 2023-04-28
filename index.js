// const hamburger = document.querySelector(".hamburger");
// const navLinksWrap = document.querySelector(".nav-links");
// const headerBackground = document.querySelector(".headerBackground")

//add EventListener
//when clicked display nav items
//when clicked create and display close icon
//when clicked hide hamBtn
//create a function that creates the close icon
//create image tag and set the src and alt
//create div tag and set the class name
//append the image tag to the div tag
//return the div tag

const hamburger = document.querySelector(".hamburger");
const navLinksWrap = document.querySelector(".nav-links");

function createCloseIcon() {
  const newDiv = document.createElement("div");
  newDiv.className = "closeIcon";
  // const image = document.createElement('img');
  const closeIcon = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;
  newDiv.innerHTML = closeIcon;
  return newDiv;
}

hamburger.addEventListener("click", () => {
  navLinksWrap.style.display = "block";
  hamburger.style.display = "none";
  const navWrap = document.querySelector(".nav-wrapper");
  navWrap.classList.add("nav-wrapper-bg");
  const closeIcon = createCloseIcon();
  navWrap.append(closeIcon);
  closeIcon.addEventListener("click", () => {
    navLinksWrap.style.display = "none";
    navWrap.classList.remove("nav-wrapper-bg");
    hamburger.style.display = "block";
    closeIcon.remove();
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var confirmModal = document.getElementById("confirmationModal");

// Get the button that opens the modal
var btnM = document.getElementById("confirmBtn");

// When the user clicks on the button, open the modal
btnM.onclick = function () {
  confirmModal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == confirmModal) {
    confirmModal.style.display = "none";
  }
};

// Get the <span> element that closes the modal
// var button = document.getElementsByClassName("modal__button")[0];

// button.onclick = function () {
//   confirmModal.style.display = "block";
// };

let confirmBtns = document.getElementsByClassName("confirmBtn");

const triggerConfirmModal = () => {
  confirmModal.style.display = "block";
};

for (let i = 0; i < confirmBtns.length; i++) {
  confirmBtns[i].addEventListener("click", triggerConfirmModal, false);
}

let closeAllModalsBtn = document.getElementById("closeModals");

closeAllModalsBtn.onclick = function () {
  console.log("close");
  confirmModal.style.display = "none";
  modal.style.display = "none";
};

// bookmark-botton-toggle
const bookmarkBtn = document.getElementById("bookmarkBtn");
const buttonPressed = (e) => {
  e.target.classList.toggle("bookmark");
  e.target.classList.toggle("bookmarked");
  e.target.innerText =
    e.target.innerText.trim() === "Bookmark" ? "Bookmarked" : "Bookmark";
};
bookmarkBtn.addEventListener("click", buttonPressed);
