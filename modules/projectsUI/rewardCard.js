
export function deactivateRewardContainer(rewardContainer, rewardCountLeft, rewardSelectButton) {
  if (rewardCountLeft === 0) {
    rewardContainer.classList.add('Reward-container-deativated');
    rewardSelectButton.textContent = 'Out of Stock';
    rewardSelectButton.disabled = true;
    rewardSelectButton.classList.add('deactivated-black');
  }
}

function createRewardCard({ name, description, minimumPledge, rewardCountLeft, id }) {
  const rewardContainer = document.createElement('div');
  rewardContainer.classList.add('Reward-container');
  
  const rewardPledge = document.createElement('div');
  rewardPledge.classList.add('Reward-pledge');

  const rewardTitle = document.createElement('h3');
  rewardTitle.textContent = name; //data used here
  rewardPledge.appendChild(rewardTitle);

  const pledgeAmount = document.createElement('p');
  pledgeAmount.textContent = `Pledge $${minimumPledge.toLocaleString()} or more`; //data used here
  rewardPledge.appendChild(pledgeAmount);

  const rewardParagraph = document.createElement('div');
  rewardParagraph.classList.add('Reward-paragraph');

  const rewardText = document.createElement('p');
  rewardText.textContent = description;
  rewardParagraph.appendChild(rewardText);

  const rewardButtonContainer = document.createElement('div');
  rewardButtonContainer.classList.add('Reward-button');

  const rewardAvailability = document.createElement('div');

  const rewardCount = document.createElement('span');
  rewardCount.classList.add('Reward-count');
  rewardCount.textContent = rewardCountLeft;
  rewardAvailability.appendChild(rewardCount);

  const rewardLeft = document.createElement('span');
  rewardLeft.textContent = 'left';
  rewardAvailability.appendChild(rewardLeft);

  rewardButtonContainer.appendChild(rewardAvailability);

  const rewardSelectButton = document.createElement('button');
  rewardSelectButton.classList.add('select-reward-btn');
  // add data attribute to button
  rewardSelectButton.dataset.id = id;
  rewardSelectButton.textContent = 'Select Reward';
  rewardButtonContainer.appendChild(rewardSelectButton);

  rewardContainer.appendChild(rewardPledge);
  rewardContainer.appendChild(rewardParagraph);
  rewardContainer.appendChild(rewardButtonContainer);
  
  deactivateRewardContainer(rewardContainer, rewardCountLeft, rewardSelectButton);

  return rewardContainer;
}


export default createRewardCard;