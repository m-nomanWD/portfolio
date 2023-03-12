// data for web
const data = [
  {
    index: 0,
    company: "Loop Studio Landing Page",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloremque.",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 1,
    company: "Flyo landing page Dark/Light",
    about:
      "Tempor occaecat ullamco sint duis. Ex eiusmod magna commodo mollit fugiat occaecat laborum ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 2,
    company: "Interir Design HomePage ",
    about:
      "Aliqua exercitation et do laborum amet tempor adipisicing laboris minim ad quis minim. Commodo ipsum ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },
    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 3,
    company: "E-Commerce Product Page",
    about:
      "Amet aliquip deserunt amet et Lorem do magna eiusmod. Irure in irure nostrud est laboris et adipisicing ad ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 4,
    company: "Interactive Pricing Component",
    about:
      "Nostrud duis eiusmod reprehenderit elit mollit sunt. Eiusmod enim non sunt veniam esse aliqua deserunt ea ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 5,
    company: "Header with Drop-Down Menu",
    about:
      "Velit cupidatat commodo consequat culpa Lorem sint voluptate deserunt. Anim id do eiusmod nisi adipisicing ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "JAVASCRIPT",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 6,
    company: "NAXDIS",
    about:
      "Tempor occaecat ullamco sint duis. Ex eiusmod magna commodo mollit fugiat occaecat laborum u",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "HTMLCSS",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 7,
    company: "JIMBIES",
    about:
      "Aliqua exercitation et do laborum amet tempor adipisicing laboris minim ad quis minim. Commodo ipsum cillum voluptate culpa ipsum fugiat qui amet laborum dolore reprehenderit ",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },
    tag: "HTMLCSS",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 8,
    company: "SCENTY",
    about:
      "Amet aliquip deserunt amet et Lorem do magna eiusmod. Irure in irure nostrud est laboris et adipisicing ad incididunt anim eiusmod qui laborum. Deserunt amet ipsum ea irure aliqua do culpa ea. Culpa ea tempor incididunt velit elit.\r\n",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "HTMLCSS",
    tech: "HTML CSS JAVASCRIPT",
  },
  {
    index: 9,
    company: "AVIT",
    about:
      "Nostrud duis eiusmod reprehenderit elit mollit sunt. Eiusmod enim non sunt veniam esse aliqua deserunt ea dolor proident occaecat non occaecat esse. Dolore quis laboris cillum mollit esse amet Lorem fugiat Lorem.\r\n",
    viewSite: {
      title: "vist site",
      urlLink: "www.google.com",
    },
    github: {
      title: "github",
      urlLink: "www.github.com",
    },

    tag: "HTMLCSS",
    tech: "HTML CSS JAVASCRIPT",
  },
];
const filterTags = [
  {
    index: 0,
    text: "HTML CSS",
    tag: "HTMLCSS",
  },
  {
    index: 1,
    text: "JAVASCRIPT",
    tag: "JAVASCRIPT",
  },
  {
    index: 2,
    text: "PHP SQL",
    tag: "PHPSQL",
  },
];
// dom objects const
const sideBar = document.querySelector(".sidebar-links-container");
const hamburger = document.querySelector(".hambuger-container");
const closer = document.querySelector(".closer");
const hero = document.querySelector(".hero");
const logConatainer = document.querySelector(".logo-img");
const projectDetail = document.querySelector(".project-info");
const projectBtnContainer = document.querySelector(".project-btns");
const proBtns = projectBtnContainer.querySelector("ul");
const sideBarLinks = sideBar.querySelectorAll(".sidebar-links");
const filterBtn = document.querySelector(".project-list-title");
console.log(closer);
console.log(sideBar);
sideBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideBarReset();
  });
});
// js variable/const
let i = 0;
let firstProject = data[i];
const projectTabBtns = filterTags
  .map((fTag) => {
    return `<li class="btn-project" data-type = ${fTag.tag}>${fTag.text}</li>`;
  })
  .join("");
let allCardShow = "";
document.addEventListener("DOMContentLoaded", () => {
  projectDetail.innerHTML = innerHtmlProDe;
  proBtns.innerHTML = projectTabBtns;
});

proBtns.addEventListener("click", function selectBtn(e) {
  allCardShow.classList.remove("hide");
  t = e.target.dataset.type;
  allCardShow.classList.remove("hide");
  const newCard = data.filter(function check(item) {
    return item.tag == t;
  });
  projectDetail.innerHTML = newCard.map(card);
});

let innerHtmlProDe = data.map(card);
function card(item) {
  return `<div class="card-container">
        <div class="card-header">
          <a href="#"  target="_blank"><i class="fa fa-folder"></i></a>
          <div class="github-container">
            <a href="${item.github.urlLink}"  target="_blank"><i class="fab fa-github"></i></a>
            <a href="${item.viewSite.urlLink}"  target="_blank"><i class="fa fa-external-link"></i></a>
          </div>
        </div>
        <div class="card-title" ><h2>${item.company}</h2></div>
        <div class="card-detail">
          <p>
        ${item.about}
          </p>
          <p class="tools" style="font-size: 14px; ">${item.tech}</p>
        </div>
      </div>
         `;
}
hamburger.addEventListener("click", () => {
  sideBar.classList.add("sidebar-show");
  hero.style.filter = "blur(8px)";
  hamburger.style.display = "none";
  console.log(sideBar);
  logConatainer.style.backgroundColor = "#112240";
});
closer.addEventListener("click", () => {
  sideBarReset();
});
function sideBarReset() {
  sideBar.classList.remove("sidebar-show");
  hero.style.filter = "blur(0)";
  hamburger.style.display = "flex";
  logConatainer.style.backgroundColor = "#0a192f";
}
// functions

// function toggle() {
//   firstProject = data[i];
//   projectDetail.innerHTML = `<h2 class="project-title">${firstProject.company}</h2>
//             <div class="project-detail">
//               <p>
//                ${firstProject.about}
//               </p>
//               <div class="btn-container">
//                 <ul>
//                   <li><a href="${firstProject.viewSite.urlLink}">${firstProject.viewSite.title}</a></li>
//                   <li><a href="${firstProject.github.urlLink}">${firstProject.github.title}</a></li>
//                   <li><a href="${firstProject.youtube.urlLink}">${firstProject.youtube.title}</a></li>
//                 </ul>

//             </div>
//          `;
// }

// function prevProject() {
//   if (i == 1) {
//     prevBtn.style.display = "none";
//   }
//   nextBtn.style.display = "block";
//   data[i--];
//   toggle();
// }
// function nextProject() {
//   if (i == data.length - 2) {
//     nextBtn.style.display = "none";
//   }
//   data[i++];
//   prevBtn.style.display = "block";
//   toggle();
// }
// nextBtn.addEventListener("click", nextProject);
// prevBtn.addEventListener("click", prevProject);

// objects inner html
