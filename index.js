import projectDetailsUI from "./modules/project.js";
import croudFund from "./modules/data.js";
import createRewardCardPopup from "./modules/backProjectPopup/backProjectPopup.js";
import createCloseIcon from "./utility/createCloseIcon.js";
import addEventToCheckbox from "./modules/backProjectPopup/selectRewardCard.js";


// Hamburger event
const hamburger = document.querySelector(".hamburger");
const navLinksWrap = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinksWrap.style.display = "block";
  hamburger.style.display = "none";
  const closeIcon = createCloseIcon();
  navLinksWrap.append(closeIcon);
  closeIcon.addEventListener("click", () => {
    navLinksWrap.style.display = "none";
    hamburger.style.display = "block"
    closeIcon.remove()
  })
});

const currentProject = croudFund[0];
projectDetailsUI(currentProject);

const backThisProjectBtn = document.querySelector(".bamboo-btn");
backThisProjectBtn.addEventListener("click", () => {
  createRewardCardPopup(currentProject.fundingRewards, currentProject.rewardWithoutPledge);
  addEventToCheckbox();
});