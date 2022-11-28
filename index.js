const hamburger = document.querySelector(".hamburger");
const navLinksWrap = document.querySelector(".nav-links");

//add EventListener
//when clicked display nav items
//when clicked create and display close icon
//when clicked hide hamBtn
//create a function that creates the close icon
//create image tag and set the src and alt
//create div tag and set the class name
//append the image tag to the div tag
//return the div tag

function createCloseIcon() {
  const newDiv = document.createElement("div");
  newDiv.className = "closeIcon"
  // const image = document.createElement('img');
  const closeIcon = `<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>`;
  newDiv.innerHTML = closeIcon;
  return newDiv;
}
console.log(createCloseIcon());

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
