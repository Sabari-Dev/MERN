let Employee = [
  {
    id: 1,
    name: "Robert clary",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1.jpg",
    designation: "Front-end Developer",
    description:
      "An experienced frontend developer is a professional with a deep understanding of web technologies and a proven track record of creating visually appealing and highly functional user interfaces for websites and web applications. They possess a comprehensive knowledge of HTML, CSS, and JavaScript, as well as frameworks and libraries such as React, Angular, or Vue.js.",
  },
  {
    id: 2,
    name: "Mary jane",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210.jpg",
    designation: "HR Recruiter",
    description:
      "The role of an experienced HR recruiter involves various tasks and skills. They often collaborate closely with hiring managers and department heads to determine the qualifications, skills, and experience required for open positions. They design and implement effective recruitment strategies to attract a diverse pool of candidates, utilizing various channels such as job boards, social media platforms, and professional networks.",
  },
  {
    id: 3,
    name: "Will Marcos",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-2397-1-2.jpg",
    designation: "Team Leader",
    description:
      "An experienced team leader is a skilled professional who possesses a wealth of knowledge, expertise, and leadership abilities in guiding and managing a team towards achieving organizational goals. This individual has honed their skills through years of practical experience and has a deep understanding of both the industry they work in and the dynamics of effective team management.",
  },
  {
    id: 4,
    name: "Ruby williams",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-855-2.jpg",
    designation: "IT Support Specialist",
    description:
      "An experienced IT Support Specialist is a seasoned professional who has acquired significant expertise and knowledge in providing technical support and assistance to end-users within an organization. They possess an in-depth understanding of computer systems, networks, hardware, software, and troubleshooting methodologies.",
  },
  {
    id: 5,
    name: "Mike brain",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-797.jpg",
    designation: "Project Manager",
    description:
      "An experienced Project Manager should possess strong leadership, communication, and interpersonal skills. They should be able to navigate through complex project dynamics, manage conflicts, and drive cross-functional collaboration. Attention to detail, organizational abilities, and the ability to manage multiple projects simultaneously are also crucial for success in this role..",
  },
  {
    id: 6,
    name: "Robin",
    image:
      "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1663-1.jpg",
    designation: "Database Administrator",
    description:
      "Database Administrator (DBA) is a professional responsible for managing, organizing, and securing an organization's databases. They play a crucial role in ensuring data integrity, availability, and performance",
  },
];
let leftBtn = document.querySelector(".btn-left");
let rightBtn = document.querySelector(".btn-right");
let empPage = document.querySelector(".emp-page");
let item = 0;
let randomBtn = document.querySelector(".random");
window.addEventListener("DOMContentLoaded", () => {
  showEmpDetails();
});
function showEmpDetails() {
  const value = Employee[item];
  empPage.innerHTML = ` <div class="emp-img">
          <img
            src=${value.image}
            class="empImage"
            alt=""
          />
        </div>
        <div class="content">
          <h3 class="emp-name">${value.name}</h3>
          <p class="design">${value.designation}</p>
          <p class="descrip">${value.description}</p>
        </div>`;
}
rightBtn.addEventListener("click", () => {
  item++;
  if (item > Employee.length - 1) {
    item = 0;
  }
  showEmpDetails();
});

leftBtn.addEventListener("click", () => {
  item--;
  if (item < 0) {
    item = Employee.length - 1;
  }
  showEmpDetails();
});
randomBtn.addEventListener("click", () => {
  item = Math.floor(Math.random() * Employee.length);
  showEmpDetails();
});
