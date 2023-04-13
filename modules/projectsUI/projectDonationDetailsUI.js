const createProjectDonationDetailsUI = ({ fundingGoal, fundingPledged, fundingBackers, fundingDaysLeft }) => {
  const sectionContainer = document.createElement("section");
  sectionContainer.classList.add("section-container");

  const donationSection = document.createElement("div");
  donationSection.classList.add("Donation-section");

  const fundingSection1 = document.createElement("div");
  fundingSection1.classList.add("funding-section");
  const fundingAmount1 = document.createElement("h2");
  fundingAmount1.classList.add("funding-amount");
  fundingAmount1.textContent = `$${fundingPledged.toLocaleString()}`; // passed in data here
  const fundingText1 = document.createElement("p");
  fundingText1.classList.add("funding-text");
  fundingText1.textContent = `of $${fundingGoal.toLocaleString()} backed`;; // passed in data here
  fundingSection1.appendChild(fundingAmount1);
  fundingSection1.appendChild(fundingText1);

  const hr1 = document.createElement("hr");
  hr1.classList.add("funding-line");

  const fundingSection2 = document.createElement("div");
  fundingSection2.classList.add("funding-section");
  const fundingAmount2 = document.createElement("h2");
  fundingAmount2.classList.add("funding-amount");
  fundingAmount2.textContent = fundingBackers.toLocaleString(); // passed in data here
  const fundingText2 = document.createElement("p");
  fundingText2.classList.add("funding-text");
  fundingText2.textContent = "total backers";
  fundingSection2.appendChild(fundingAmount2);
  fundingSection2.appendChild(fundingText2);

  const hr2 = document.createElement("hr");
  hr2.classList.add("funding-line");

  const fundingSection3 = document.createElement("div");
  fundingSection3.classList.add("funding-section");
  const fundingAmount3 = document.createElement("h2");
  fundingAmount3.classList.add("funding-amount");
  fundingAmount3.innerHTML = fundingDaysLeft; // passed in data here
  const fundingText3 = document.createElement("p");
  fundingText3.classList.add("funding-text");
  fundingText3.textContent = fundingDaysLeft <= 1 ? "day left" : "days left"; // passed in data here
  fundingSection3.appendChild(fundingAmount3);
  fundingSection3.appendChild(fundingText3);

  donationSection.appendChild(fundingSection1);
  donationSection.appendChild(hr1);
  donationSection.appendChild(fundingSection2);
  donationSection.appendChild(hr2);
  donationSection.appendChild(fundingSection3);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  const progressBarInner1 = document.createElement("div");
  const progressBarInner2 = document.createElement("div");
  progressBar.appendChild(progressBarInner1);
  progressBar.appendChild(progressBarInner2);

  sectionContainer.appendChild(donationSection);
  sectionContainer.appendChild(progressBar);

  return sectionContainer;
}

export default createProjectDonationDetailsUI;