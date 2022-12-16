const hamburger = document.querySelector(".hamburger");
const navLinksWrap = document.querySelector(".nav-links");
const selectRewardBtnArray = document.querySelectorAll(".select-reward-btn");

//add EventListener
//when clicked display nav items
//when clicked create and display close icon
//when clicked hide hamBtn
//create a function that creates the close icon
//create image tag and set the src and alt
//create div tag and set the class name
//append the image tag to the div tag
//return the div tag

function createCloseIcon(classNam) {
  const newDiv = document.createElement("div");
  newDiv.className = classNam;
  // const image = document.createElement('img');
  const closeIcon = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;
  newDiv.innerHTML = closeIcon;
  return newDiv;
}

hamburger.addEventListener("click", () => {
  navLinksWrap.style.display = "block";
  hamburger.style.display = "none";
  const closeIcon = createCloseIcon("closeIcon");
  navLinksWrap.append(closeIcon);
  closeIcon.addEventListener("click", () => {
    navLinksWrap.style.display = "none";
    hamburger.style.display = "block"
    closeIcon.remove()
  })
});

function createPopupModal() {
  const popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  const popupHeaderContainer = document.createElement("div");
  popupHeaderContainer.className = "popup-header";
  const popupHeader = document.createElement("h3");
  popupHeader.textContent = "Back this project";
  const closeIcon = createCloseIcon("reward-popup-close-icon");

  popupHeaderContainer.append(popupHeader, closeIcon);
  popupContainer.appendChild(popupHeaderContainer);
  return popupContainer;
}


const newSelectRewardBtnArray = Array.from(selectRewardBtnArray);
newSelectRewardBtnArray.forEach((btn) => {  
  if(!btn.classList.contains("deactivated-btn")) {
    console.log(btn);
    btn.addEventListener("click", () => {
      console.log("reward button clicked");
      const popupContainer = createPopupModal();
      const mainContainer = document.querySelector('.main-container');
      mainContainer.appendChild(popupContainer);
    })
  }
});
