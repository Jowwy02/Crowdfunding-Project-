import createForm from './createForm.js';

// select reward event
function extractPledgeAmount(target) {
  const pledgeHeader = target.parentElement.parentElement.querySelector('.reward-card-pledge'); 
  let pledgeAmountText = '';
  if(!pledgeHeader) {
    pledgeAmountText = "0"
  } else {
    pledgeAmountText = pledgeHeader.textContent.trim();
  }
  const regex = /\d+/; // Match one or more digits
  const match = pledgeAmountText.match(regex);
  console.log(match);

  if (match) {
    return match[0];
  }

  return null; // Return null if no match is found  
}

function resetRewardCards() {
  const rewardCards = document.querySelectorAll('.reward-card');
  rewardCards.forEach((card) => {
    if(card.classList.contains('reward-card--active')) {
      card.classList.remove('reward-card--active');
      const checkbox = card.querySelector('#pledge-checkbox');
      checkbox.checked = false;
      const form = card.querySelector('.reward-card-form');
      form?.remove();
    }
  });
}

// Add event listener to the .pledge-checkbox
function addEventToCheckbox() {
  const rewardCardChecbkoxes = document.querySelectorAll('#pledge-checkbox');
  rewardCardChecbkoxes.forEach((checkbox) => {
    // add events only to active rewardCards
    const rewardCard = checkbox.parentElement.parentElement.parentElement;
    if(!rewardCard.classList.contains('reward-card--disabled')) {
      checkbox.addEventListener('click', (e) => {   
        // Reset all reward cards      
        resetRewardCards();
  
        const selectedRewardCard = e.target.parentElement.parentElement.parentElement;
        const rewardCardBody = selectedRewardCard.querySelector('.reward-card-body');
  
        const minimumPledge = extractPledgeAmount(e.target) || 0;      
        
        if(checkbox.checked) {       
          selectedRewardCard.classList.add('reward-card--active');
          const form = createForm({ minimumPledge });
          rewardCardBody.appendChild(form);
        } else {
          selectedRewardCard.classList.remove('reward-card--active');
          const form = selectedRewardCard.querySelector('.reward-card-form');
          form?.remove();
        }
      });
    }
  });
}

export default addEventToCheckbox;