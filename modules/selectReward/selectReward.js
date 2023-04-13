import createRewardCardPopup from "../backProjectPopup/backProjectPopup.js";
import addEventToCheckbox from "../backProjectPopup/selectRewardCard.js";
import croudFund from "../data.js";

const currentProject = croudFund[0];

function addEventsToAllNonModalRewardBtns() {
  const selectRewardBtns = document.querySelectorAll('.select-reward-btn');
  selectRewardBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      createRewardCardPopup(currentProject.fundingRewards, currentProject.rewardWithoutPledge);
      addEventToCheckbox();      
      const id = e.target.dataset.id;
      const rewardCards = Array.from(document.querySelectorAll('.reward-card'));
      const rewardCard = rewardCards.find((card) => card.dataset.id === id);
      rewardCard.querySelector('#pledge-checkbox').click();
    });
  });
}

export default addEventsToAllNonModalRewardBtns;