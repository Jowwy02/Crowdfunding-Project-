function generateAboutSection({ aboutProject }) {
  const section = document.createElement("section");
  section.classList.add("about-project-section");

  const title = document.createElement("h4");
  title.textContent = "About this project";

  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("about-paragraph");
  paragraph1.textContent = aboutProject.para1; // data from project.js
    
  const paragraph2 = document.createElement("p");
  paragraph2.classList.add("about-paragraph");
  paragraph2.textContent =aboutProject.para2; // data from project.js

  section.appendChild(title);
  section.appendChild(paragraph1);
  section.appendChild(paragraph2);

  return section;
}

export default generateAboutSection;