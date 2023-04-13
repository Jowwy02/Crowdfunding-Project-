// create all the UI elements using a safe DOM API to avoid xss attacks
// const navLinksWrap = document.querySelector(".nav-links");

import createProjectIntroCard from "./projectsUI/projectIntroCard.js";
import createProjectDonationDetailsUI from "./projectsUI/projectDonationDetailsUI.js";
import generateAboutSection from "./projectsUI/aboutSectionCard.js";
import createRewardCard from "./projectsUI/rewardCard.js";
import insertAfter from "../utility/insertAfter.js";

const projectDetailsUI = (project) => {
  console.log(project);
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");
 
  const cardsSection = document.createElement("section");
  cardsSection.classList.add("cards-section");
 
  // create projectIntroCard and donationDetailsUI  
  const introCard = createProjectIntroCard(project);
  const donationDetailsUI = createProjectDonationDetailsUI(project);
  const aboutSection = generateAboutSection(project);

  project.fundingRewards.forEach((reward) => {
    const rewardCard = createRewardCard(reward);
    aboutSection.appendChild(rewardCard);
  }); 
  
  // insert introCard before first element
  cardsSection.insertBefore(introCard, cardsSection.firstChild);
  // Insert donationDetailsUI after first element
  insertAfter(donationDetailsUI, introCard);
  // append createRewardCard to aboutSection 


  mainContainer.appendChild(cardsSection);
  mainContainer.appendChild(aboutSection);
  // append mainContainer to <div id="root">
  document.querySelector("#root").appendChild(mainContainer);
}

export default projectDetailsUI;