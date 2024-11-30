let timer_2; // Declare the timer variable once at the beginning
// const skill_data = [
//   "My expertise in C++ reflects my strong grasp of logical programming and intricate problem-solving.It has been an invaluable tool for enhancing my logical thinking and algorithmic understanding, preparing me for future challenges in software development.",
//   "Python is my preferred language for programming, owing to its simplicity and versatility.",
//   "My mastery of CSS shines through in creating visually appealing and user-friendly interfaces. In number of projects, I demonstrated the art of responsive design and user interface optimization.",
//   "React has become my tool of choice for building modern, dynamic user interfaces. In number of projects, I employed React to develop a feature-rich and performant web application, highlighting its flexibility and reactivity.",
//   "As a front-end developer, JavaScript is at the heart of my work, enabling interactive and responsive web applications. A prime example is protfolio it self where JavaScript brought a dynamic user experience to app.",
//   "HTML forms the cornerstone of my web development projects, ensuring the solid structure and presentation of content. In almost all the projects HTML's structure played a pivotal role.",
//   "Node.js is my go-to for server-side development. I've designed and deployed robust web servers and RESTful APIs, I have experiance working with nodejs as i implemented this in number of projects",
//   "Proficient in C, I've honed my logical thinking and block-level programming skills, which serve as the building blocks for efficient software development.It has been instrumental in shaping my problem-solving and algorithmic thinking",
//   "My expertise in MongoDB revolves around crafting flexible and efficient database solutions. In number of projects, I designed a database schema that seamlessly accommodated evolving data requirements.",
// ];

const skill_data = [
  "Node.js: Node.js is my go-to technology for server-side development. I have designed and deployed robust web servers and RESTful APIs, with extensive experience applying Node.js in numerous projects.",
  "Python: Python is my preferred language for programming, owing to its simplicity, versatility, and wide-ranging support for AI and machine learning frameworks.",
  "LangChain: Experienced with LangChain, leveraging its powerful capabilities for building robust language model applications, including automated workflows and pipelines.",
  "React: React has become my tool of choice for building modern, dynamic user interfaces. I've utilized React in several projects to create feature-rich, performant web applications, demonstrating its flexibility and reactivity.",
  "JavaScript: As a front-end developer, JavaScript is at the core of my work, enabling interactive and responsive web applications. For example, in my portfolio, JavaScript creates a dynamic user experience.",
  "HTML: HTML is the foundation of all my web development projects, ensuring a solid structure and seamless content presentation. Its role in organizing and displaying content is pivotal to the success of every project.",
  "Generative AI: I have a deep understanding of generative AI models and their applications, utilizing cutting-edge techniques to build innovative solutions.",
  "C Programming: Proficient in C, I have refined my problem-solving and algorithmic skills, leveraging its low-level capabilities to optimize performance and write efficient, scalable software.",
  "MongoDB: My expertise in MongoDB focuses on designing flexible, scalable database solutions. I've built several efficient schema structures to meet evolving data requirements in various projects.",
];

const skillElements = document.querySelectorAll(".skill");
let p, hr, interval;

skillElements.forEach((skill) => {
  skill.addEventListener("click", function () {
    if (window.innerWidth > 720) {
      if (this.className.includes("expand")) {
        this.classList.remove(this.id + "-expand");
        this.classList.remove("skill-expand");
        p.remove();
        hr.remove();
        clearTimeout(timer_2); //clear exsiting timeouts
        timer_2 = setTimeout(() => {
          this.style.zIndex = 0;
        }, 300);
      } else {
        const index = this.id.split("--")[1];
        this.style.zIndex = 100;
        this.className += " " + this.id + "-expand " + "skill-expand";
        hr = document.createElement("hr");
        p = document.createElement("p");
        this.appendChild(hr);
        p.textContent = skill_data[index - 1];

        this.appendChild(p);
      }
    }
  });
});
function startAnimation() {
  const overlay = document.getElementsByClassName("skill-content-overlay")[0];
  overlay.classList.add("animat-overlay");
  clearTimeout(timer_2); //clear exsiting timeouts
  timer_2 = setTimeout(() => {
    overlay.classList.remove("animat-overlay");
  }, 3000);
}
clearInterval(interval);
interval = setInterval(startAnimation, 15000);
