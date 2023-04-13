import createCloseIcon from '../../utility/createCloseIcon.js';

import createRewardCard from './createRewardCardPopup.js';

function createModalContainer() {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const rewardModal = document.createElement('div');
  rewardModal.classList.add('reward-modal');

  const modalHeading = document.createElement('h3');
  modalHeading.classList.add('modal-heading');
  modalHeading.textContent = 'Back this project';
  rewardModal.appendChild(modalHeading);

  const modalParagraph = document.createElement('p');
  modalParagraph.classList.add('modal-paragraph');
  modalParagraph.textContent = 'Want to support us in bringing this Mastercraft Bamboo Monitor Riser out to the world?';
  rewardModal.appendChild(modalParagraph);

  const closeIcon = createCloseIcon();
  closeIcon.id = 'modal-close-icon';  
  const icon = closeIcon.querySelector('svg g');
  icon.setAttribute('fill', '#666666');

  const rewardCardsWrap = document.createElement('div');
  rewardCardsWrap.classList.add('reward-cards-wrap');

  rewardModal.appendChild(closeIcon);
  rewardModal.appendChild(rewardCardsWrap);
  modalContainer.appendChild(rewardModal);

  return modalContainer;
}

function createRewardCardWithoutPledge(rewardWithoutPledge) {
  return createRewardCard(true, rewardWithoutPledge);
}

function createRewardCardWithReward(reward) {
  return createRewardCard(false, reward);
}

function appendRewardCardsToWrap(rewardCardsWrap, fundingRewards, rewardWithoutPledge) {
  const rewardCardWithoutReward = createRewardCardWithoutPledge(rewardWithoutPledge);
  rewardCardsWrap.appendChild(rewardCardWithoutReward);

  fundingRewards.forEach((reward) => {
    const rewardCardWithReward = createRewardCardWithReward(reward);
    rewardCardsWrap.appendChild(rewardCardWithReward);
  });
}

function createRewardCardPopup(fundingRewards = [], rewardWithoutPledge) {
  const modalContainer = createModalContainer();
  const rewardCardsWrap = modalContainer.querySelector('.reward-cards-wrap');
  appendRewardCardsToWrap(rewardCardsWrap, fundingRewards, rewardWithoutPledge);

  const root = document.querySelector('#root');
  root.appendChild(modalContainer);
  modalContainer.classList.add('show');

  addCloseEventToIcon(modalContainer);
}

function addCloseEventToIcon(modalContainer) {
  const closeIcon = document.querySelector("#modal-close-icon");

  function removeModalContainer() {   
    modalContainer.classList.remove('show');    
    setTimeout(() => {
      modalContainer.remove();
    }, 300);
    closeIcon.removeEventListener("click", removeModalContainer);
  }

  closeIcon.addEventListener("click", removeModalContainer); 
}

export default createRewardCardPopup;
