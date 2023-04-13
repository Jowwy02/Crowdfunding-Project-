// frontend mentors Project name: croudfunding product page
// javascript file
// const uniqid = require('uniqid');
function randomId() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}


const croudFund = [
  {
    name: "Mastercraft Bamboo Monitor Riser",
    logo: 'images/logo-mastercraft.svg',
    description: "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
    aboutProject: {
      para1: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. ",
      para2: "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
    },
    bookMarked: false,
    image: "images/image-hero-desktop.jpg",
    imageAlt: "image of a bamboo monitor stand",
    fundingGoal: 100000,
    fundingPledged: 89914,
    fundingDaysLeft: 56,
    fundingBackers: 5007,
    fundingBackersArray: [
      { name: "Micheal Lyons", pledge: 89, comment: "They exceeded my expectations", daysAgo: 56, image: "images/avatar-1.jpg" },
      { name: "Jane Doe", pledge: 89, comment: "Love it", daysAgo: 56, image: "images/avatar-2.jpg" },
      { name: "John Doe", pledge: 89, comment: "I'm in", daysAgo: 56, image: "images/avatar-3.jpg" },
      { name: "Micheal Lyons", pledge: 89, comment: "They exceeded my expectations", daysAgo: 56, image: "images/avatar-1.jpg" },
      { name: "Jane Doe", pledge: 89, comment: "Love it", daysAgo: 56, image: "images/avatar-2.jpg" },
    ],
    fundingRewards: [
      { id: randomId(), name: "Bamboo Stand", description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", minimumPledge: 25, rewardCountLeft: 101, rewardId: "bamboo-stand" },
      { id: randomId(), name: "Black Edition Stand", description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", minimumPledge: 75, rewardCountLeft: 64, rewardId: "black-edition-stand" },
      { id: randomId(), name: "Mahogany Special Edition", description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", minimumPledge: 200, rewardCountLeft: 0, rewardId: "mahogany-special-edition" },
    ],
    rewardWithoutPledge: { id: randomId(), name: "Pledge with no reward", description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", minimumPledge: 0, rewardCountLeft: 100000000, rewardId: "pledge-with-no-reward" },
  },
  {
    name: "Handmade LeatherCraft Wallet",
    logo: '',
    description: "A beautiful crafted leather wallet for your everyday use.",
    aboutProject: {
      para1: "The Handmade LeatherCraft wallet is made using the finest leather and handcrafted to perfection. It is a sturdy and stylish wallet that is perfect for everyday use.",
      para2: "Featuring artisan craftsmanship, the simplicity of design creates extra space for your cards and cash.",
    },
    bookMarked: false,
    image: "images/image-hero-desktop.jpg",
    imageAlt: "image of a sample leather wallet",
    fundingGoal: 50000,
    fundingPledged: 39914,
    fundingDaysLeft: 76,
    fundingBackers: 3412,
    FundingBackersArray: [
    ],
    fundingRewards: [
      { rewardName: "Leather Wallet", rewardDescription: "You get a handmade leather wallet. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", rewardMinimumPledge: 25, rewardLeft: 101, rewardId: "leather-wallet" },
      { rewardName: "Leather Wallet + Leather Keychain", rewardDescription: "You get a handmade leather wallet and a leather keychain. You’ll be added to our Backer member list. Shipping is included.", rewardMinimumPledge: 75, rewardLeft: 64, rewardId: "leather-wallet-keychain" },
      { rewardName: "Leather Wallet + Leather Keychain + Leather Bracelet", rewardDescription: "You get a handmade leather wallet, a leather keychain and a leather bracelet. You’ll be added to our Backer member list. Shipping is included.", rewardMinimumPledge: 200, rewardLeft: 0, rewardId: "leather-wallet-keychain-bracelet" },
    ],
    rewardWithoutPledge: { rewardName: "Pledge with no reward", rewardDescription: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", rewardMinimumPledge: 0, rewardLeft: 100000000, rewardId: "pledge-with-no-reward" },
  }
];

export default croudFund;


