
function deactivateCard(cardContainer, rewardCountLeft) {
  if(rewardCountLeft === 0) {
    // grab .reward-card-heading, .reward-card-pledge, .reward-card-description, .reward-count-left
    const rewardCardHeading = cardContainer.querySelector('.reward-card-heading');
    const rewardCardPledge = cardContainer.querySelector('.reward-card-pledge');
    const rewardCardDescription = cardContainer.querySelector('.reward-card-description');
    const rewardCountLeft = cardContainer.querySelector('.modal-reward-count');

    // add .reward-card-heading--disabled, .reward-card-pledge--disabled, .reward-card-description--disabled, .reward-count-left--disabled
    rewardCardHeading.classList.add('reward-card-heading--disabled');
    rewardCardPledge.classList.add('reward-card-pledge--disabled');
    rewardCardDescription.classList.add('reward-card-description--disabled');
    rewardCountLeft.classList.add('modal-reward-count--disabled');
  }
}

function createRewardCard(withoutReward, reward) {
  const card = document.createElement("div");
  card.classList.add("reward-card");

  const header = createHeader(withoutReward, reward);
  const body = createBody(withoutReward, reward);

  card.appendChild(header);
  card.appendChild(body);
  
  // If reward.rewardCountLeft === 0, call deactivateCard function
  deactivateCard(card, reward.rewardCountLeft);

  return card;
}

function createHeader(withoutReward, reward) {
  const header = document.createElement("div");
  header.classList.add("reward-card-header");

  const checkbox = createCheckbox();
  const title = createTitle(withoutReward, reward);

  header.appendChild(checkbox);
  header.appendChild(title);

  return header;
}

function createCheckbox() {
  const checkboxWrap = document.createElement("div");
  checkboxWrap.classList.add("checkbox-wrap");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "pledge-checkbox");
  checkbox.setAttribute("name", "pledge-checkbox");

  checkboxWrap.appendChild(checkbox);

  return checkboxWrap;
}

function createPledgeText(pledgeAmount) {
  const pledgeText = document.createElement('p');
  pledgeText.classList.add('reward-card-pledge');
  pledgeText.textContent = `Pledge $${pledgeAmount} or more`;

  return pledgeText;
}

function createTitle(withoutReward, { name, minimumPledge }) { // create flexible function to add pledge title
   
  const titleWrap = document.createElement("div");
  titleWrap.classList.add("reward-card-title");

  const title = document.createElement("h3");
  title.classList.add("reward-card-heading");
  title.textContent = name;

  const pledgeText = createPledgeText(minimumPledge);

  titleWrap.appendChild(title);
  withoutReward ? null : titleWrap.appendChild(pledgeText);
  return titleWrap;
}

function createBody(withoutReward, reward) {
  const body = document.createElement("div");
  body.classList.add("reward-card-body");

  const description = createDescription(reward);
  
  body.appendChild(description);
  withoutReward ? null : body.appendChild(createRewardCountLeft(reward));

  return body;
}

function createDescription({ description }) {
  const descriptionEl = document.createElement("p");
  descriptionEl.classList.add("reward-card-description");
  descriptionEl.textContent = description;

  return descriptionEl;
}

function createRewardCountLeft({ rewardCountLeft }) {
  const rewardCountLeftDiv = document.createElement('div');
  rewardCountLeftDiv.classList.add('reward-count-left');

  const rewardCountSpan = document.createElement('span');
  rewardCountSpan.classList.add('modal-reward-count');
  rewardCountSpan.textContent = rewardCountLeft;

  const leftSpan = document.createElement('span');
  leftSpan.textContent = 'left';

  rewardCountLeftDiv.appendChild(rewardCountSpan);
  rewardCountLeftDiv.appendChild(leftSpan);

  return rewardCountLeftDiv;
}

export default createRewardCard;