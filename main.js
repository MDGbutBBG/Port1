const projectData = {
  "smart-canteen": {
    title: "Smart Canteen",
    image: "https://ik.imagekit.io/1yx14mqni/6210.jpg",
    tags: ["Glide", "Figma", "HTML", "UI/UX Design"],
    description:
      "โซลูชันดิจิทัลแบบครบวงจรสำหรับโรงอาหารของโรงเรียน ที่ช่วยทำให้กระบวนการสั่งอาหารเป็นระเบียบและมีประสิทธิภาพยิ่งขึ้น แอปนี้ช่วยให้ผู้เรียนสามารถดูเมนู สั่งอาหาร และติดตามสถานะการเตรียมอาหารแบบเรียลไทม์",
    features: [
      "อินเทอร์เฟซที่ใช้งานง่าย ออกแบบด้วย Figma",
      "ระบบติดตามสั่งอาหารแบบเรียลไทม์",
      "เมนูดิจิทัลพร้อมข้อมูลโภชนาการ",
      "ระบบจัดการคิว",
      "การรวมการชำระเงิน",
      "แผงควบคุมสำหรับการจัดการเมนู",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  "education-hub": {
    title: "Education Hub",
    image: "https://ik.imagekit.io/1yx14mqni/Screenshot%202025-07-19%20195902.png?updatedAt=1752929951879",
    tags: ["Glide", "HTML", "Excel", "Data Management"],
    description:
      "แพลตฟอร์มเชิงโต้ตอบที่ออกแบบมาเพื่อเสริมสร้างความร่วมมือระหว่างนักเรียนและครูภายในโรงเรียน พื้นที่นี้ทำหน้าที่เป็นศูนย์กลางสำหรับกิจกรรมการเรียนรู้ การแบ่งปันทรัพยากร และการสื่อสารด้านวิชาการ",
    features: [
      "ศูนย์กลางสื่อการสอน",
      "สื่อสารระหว่างนักเรียนและครู",
      "ระบบส่งงานและตรวจงาน",
      "โมดูลการเรียนรู้แบบโต้ตอบ",
      "การจัดการข้อมูลคะแนน",
      "การติดตามกิจกรรม",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  "newest-project": {
    title: "การแข่งขันเขียนโปรแกรมภาษาคอมพิวเตอร์",
    image:
      "https://ik.imagekit.io/1yx14mqni/%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97%E0%B8%97%E0%B8%B5%E0%B8%A1.png",
    tags: ["Python"],
    description:
      "โปรเจกต์ที่ได้รับรางวัลจากการแข่งขันเขียนโปรแกรมภาษาคอมพิวเตอร์",
    features: [
      "การทำงานเป็นทีม",
      "ฟังก์ชันการทำงานแบบโต้ตอบด้วย python",
      "การฝึกคิดอย่างเป็นระบบ",
      "การประยุกต์ใช้",
    ],
    liveLink: "#",
    githubLink: "https://github.com/MDGbutBBG",
  },
};

// Skill data with detailed information
const skillData = {
  python: {
    title: "Python",
    icon: "🐍",
    level: "Intermediate Level",
    description:
      "Python คือภาษาที่ใช้กับการวิเคราะห์ข้อมูล, อัตโนมัติ และการพัฒนาเบื้องหลัง ฉันชอบความง่ายง่ายและเครื่องมือที่มีประสิทธิภาพที่ทำให้งานที่ซับซ้อนสามารถจัดการได้",
    sections: [
      {
        title: "Core Concepts",
        items: [
          "Object-Oriented Programming",
          "Data Structures & Algorithms",
          "File I/O Operations",
          "Exception Handling",
          "Regular Expressions",
        ],
      },
      {
        title: "Libraries & Frameworks",
        items: [
          "NumPy for numerical computing",
          "Pandas for data manipulation",
          "Flask for web development",
          "Requests for HTTP operations",
          "Beautiful Soup for web scraping",
        ],
      },
      {
        title: "Learning Projects",
        experiences: [
          {
            title: "Data Analysis Scripts",
            description:
              "Created scripts to analyze and visualize data from various sources",
          },
          {
            title: "Automation Tools",
            description:
              "Built tools to automate repetitive tasks and file management",
          },
        ],
      },
    ],
  },
  javascript: {
    title: "JavaScript",
    icon: "⚡",
    level: "Intermediate Level",
    description:
      "JavaScript คือพลังขับเคลื่อนความอินเทอร์แอคทีฟในโปรเจกต์เว็บของฉัน ฉันสนุกกับการสร้างอินเทอร์เฟซที่โต้ตอบได้อย่างลื่นไหล พร้อมทั้งจัดการลอจิกฝั่งหน้าเว็บที่ซับซ้อนให้ทำงานได้อย่างเป็นธรรมชาติและมีประสิทธิภาพ",
    sections: [
      {
        title: "Frontend Development",
        items: [
          "DOM Manipulation",
          "Event Handling",
          "Async/Await & Promises",
          "Fetch API for HTTP requests",
          "Local Storage & Session Storage",
        ],
      },
      {
        title: "Modern JavaScript",
        items: [
          "ES6+ Features (Arrow Functions, Destructuring)",
          "Module Import/Export",
          "Template Literals",
          "Array Methods (map, filter, reduce)",
          "Spread & Rest Operators",
        ],
      },
      {
        title: "Project Applications",
        experiences: [
          {
            title: "Interactive Web Pages",
            description:
              "Built dynamic websites with smooth animations and user interactions",
          },
          {
            title: "API Integration",
            description:
              "Connected frontend applications with external APIs for data fetching",
          },
        ],
      },
    ],
  },
  java: {
    title: "Java",
    icon: "☕",
    level: "Beginner Level",
    description:
      "Java คือประตูบานแรกที่พาฉันเข้าสู่โลกของการเขียนโปรแกรมเชิงวัตถุและหลักการพัฒนาซอฟต์แวร์ต่างๆ ฉันกำลังเรียนรู้ระบบประเภทข้อมูลที่เข้มงวดของมัน รวมถึงศักยภาพระดับองค์กรที่ทำให้ Java ถูกใช้กันอย่างกว้างขวางในงานพัฒนาขนาดใหญ่",
    sections: [
      {
        title: "Object-Oriented Concepts",
        items: [
          "Classes and Objects",
          "Inheritance and Polymorphism",
          "Encapsulation and Abstraction",
          "Interface Implementation",
          "Static Methods and Variables",
        ],
      },
      {
        title: "Core Java Features",
        items: [
          "Collections Framework",
          "Exception Handling",
          "File I/O Operations",
          "String Manipulation",
          "Basic GUI with Swing",
        ],
      },
      {
        title: "Learning Experience",
        experiences: [
          {
            title: "Console Applications",
            description:
              "Created simple command-line programs to practice core concepts",
          },
          {
            title: "Algorithm Implementation",
            description:
              "Implemented basic algorithms and data structures in Java",
          },
        ],
      },
    ],
  },
  cpp: {
    title: "C++",
    icon: "⚙️",
    level: "Beginner Level",
    description:
      "C++ คือภาษาที่สอนให้ผมเข้าใจเกี่ยวกับการเขียนโปรแกรมแบบต่ำระดับและจัดการกับการจัดการหน่วยความจำ ช่วยให้ผมเข้าใจเกี่ยวกับการทำงานของคอมพิวเตอร์ที่มีระดับพื้นฐาน",
    sections: [
      {
        title: "Fundamentals",
        items: [
          "Pointers and Memory Management",
          "Functions and Recursion",
          "Arrays and Strings",
          "Structures and Classes",
          "File Operations",
        ],
      },
      {
        title: "Programming Concepts",
        items: [
          "Control Flow Statements",
          "Data Types and Variables",
          "Operators and Expressions",
          "Input/Output Streams",
          "Basic STL Usage",
        ],
      },
      {
        title: "Practice Areas",
        experiences: [
          {
            title: "Algorithm Practice",
            description:
              "Solving programming problems to understand algorithms and logic",
          },
          {
            title: "System Programming",
            description:
              "Learning about memory management and system-level programming",
          },
        ],
      },
    ],
  },
  "html-css": {
    title: "HTML/CSS",
    icon: "🎨",
    level: "Advanced Level",
    description:
      "HTML และ CSS คือฐานที่ผมใช้ในการพัฒนาเว็บ ผมสร้างเว็บที่มีความสอดคล้องกับอุปกรณ์ที่ใช้ พร้อมทั้งมีความสอดคล้องกับผู้ใช้ที่มีความต้องการที่แตกต่างกัน รวมถึงการออกแบบที่สวยงามและมีความสอดคล้องกับหลักการการออกแบบที่สมัยใหม่",
    sections: [
      {
        title: "Modern CSS Features",
        items: [
          "CSS Grid and Flexbox",
          "CSS Variables and Custom Properties",
          "Animations and Transitions",
          "Media Queries for Responsiveness",
          "CSS Preprocessors (Sass/SCSS)",
        ],
      },
      {
        title: "Advanced Techniques",
        items: [
          "Semantic HTML5 Elements",
          "Accessibility Best Practices",
          "Mobile-First Design",
          "CSS Architecture (BEM)",
          "Performance Optimization",
        ],
      },
      {
        title: "Project Portfolio",
        experiences: [
          {
            title: "Responsive Portfolios",
            description:
              "Built multiple portfolio websites with modern design patterns",
          },
          {
            title: "School Projects",
            description:
              "Created websites for school assignments and competitions",
          },
        ],
      },
    ],
  },
  react: {
    title: "React",
    icon: "⚛️",
    level: "Beginner Level",
    description:
      "React ช่วยให้ผมสามารถพัฒนาหน้าต่างผู้ใช้ที่มีประสิทธิภาพและมีความสอดคล้องกับหลักการพัฒนาที่สมัยใหม่ ด้วยการใช้โครงสร้างแบบ component-based architecture ช่วยให้ผมสามารถสร้างหน้าต่างผู้ใช้ที่มีความสอดคล้องกับผู้ใช้ที่มีความต้องการที่แตกต่างกัน รวมถึงการออกแบบที่สวยงามและมีความสอดคล้องกับหลักการการออกแบบที่สมัยใหม่",
    sections: [
      {
        title: "React Fundamentals",
        items: [
          "Components and JSX",
          "Props and State Management",
          "Event Handling",
          "Conditional Rendering",
          "Lists and Keys",
        ],
      },
      {
        title: "React Hooks",
        items: [
          "useState for State Management",
          "useEffect for Side Effects",
          "useContext for Global State",
          "Custom Hooks Creation",
          "Component Lifecycle",
        ],
      },
      {
        title: "Learning Journey",
        experiences: [
          {
            title: "Interactive Components",
            description: "Building reusable UI components with React",
          },
          {
            title: "State Management",
            description:
              "Learning to manage complex application state effectively",
          },
        ],
      },
    ],
  },
  nodejs: {
    title: "Node.js",
    icon: "🟢",
    level: "Beginner Level",
    description:
      "Node.js ทำให้ฉันได้เปิดมุมมองใหม่ของงานพัฒนาฝั่งเซิร์ฟเวอร์ด้วย JavaScript ฉันกำลังเรียนรู้การเขียนโปรแกรมแบบ server-side และการพัฒนา API เพื่อสร้างระบบที่ตอบสนองได้รวดเร็วและยืดหยุ่นมากขึ้น",
    sections: [
      {
        title: "Core Concepts",
        items: [
          "Asynchronous Programming",
          "File System Operations",
          "HTTP Server Creation",
          "NPM Package Management",
          "Express.js Framework Basics",
        ],
      },
      {
        title: "Backend Skills",
        items: [
          "RESTful API Development",
          "Middleware Understanding",
          "Database Connections",
          "Authentication Basics",
          "Error Handling",
        ],
      },
      {
        title: "Learning Projects",
        experiences: [
          {
            title: "Simple Web Server",
            description:
              "Created basic HTTP servers to understand backend fundamentals",
          },
          {
            title: "API Endpoints",
            description: "Built simple REST APIs for data management",
          },
        ],
      },
    ],
  },
  git: {
    title: "Git",
    icon: "📝",
    level: "Intermediate Level",
    description:
      "Git เป็นเครื่องมือสำคัญสำหรับการควบคุมเวอร์ชันและการทำงานร่วมกัน ฉันใช้มันเพื่อติดตามการเปลี่ยนแปลง จัดการโปรเจกต์ และร่วมงานกับผู้อื่นได้อย่างมีประสิทธิภาพ",
    sections: [
      {
        title: "Version Control",
        items: [
          "Repository Management",
          "Branching & Merging",
          "Commit Best Practices",
          "Conflict Resolution",
          "Remote Repository Management",
        ],
      },
      {
        title: "Collaboration",
        items: [
          "GitHub Workflow",
          "Pull Requests",
          "Code Reviews",
          "Issue Tracking",
          "Project Management",
        ],
      },
      {
        title: "Daily Usage",
        experiences: [
          {
            title: "Personal Projects",
            description:
              "All my coding projects are version controlled with Git",
          },
          {
            title: "School Assignments",
            description:
              "Using Git to manage and submit programming assignments",
          },
        ],
      },
    ],
  },
  sql: {
    title: "SQL",
    icon: "🗄️",
    level: "Beginner Level",
    description:
      "SQL ช่วยให้ฉันทำงานกับฐานข้อมูลได้อย่างมีประสิทธิภาพ ไม่ว่าจะเป็นการเก็บ เรียกใช้ หรือปรับแต่งข้อมูลต่างๆ ซึ่งถือเป็นพื้นฐานสำคัญของทุกแอปพลิเคชันที่ขับเคลื่อนด้วยข้อมูล",
    sections: [
      {
        title: "Database Fundamentals",
        items: [
          "SELECT Queries",
          "INSERT, UPDATE, DELETE",
          "Table Joins",
          "Data Filtering",
          "Aggregate Functions",
        ],
      },
      {
        title: "Database Design",
        items: [
          "Table Creation",
          "Primary & Foreign Keys",
          "Normalization Basics",
          "Index Understanding",
          "Data Types",
        ],
      },
      {
        title: "Practice Areas",
        experiences: [
          {
            title: "School Database Projects",
            description:
              "Created databases for managing student information and grades",
          },
          {
            title: "Data Analysis",
            description:
              "Using SQL to analyze and extract insights from datasets",
          },
        ],
      },
    ],
  },
  mongodb: {
    title: "MongoDB",
    icon: "🍃",
    level: "Beginner Level",
    description:
      "MongoDB ทำให้ฉันได้รู้จักโลกของฐานข้อมูลแบบ NoSQL และการจัดเก็บข้อมูลในรูปแบบเอกสาร ซึ่งให้ความยืดหยุ่นสูงและเหมาะกับเว็บแอปพลิเคชันยุคใหม่ที่ต้องรองรับโครงสร้างข้อมูลที่เปลี่ยนแปลงได้ตลอดเวลา",
    sections: [
      {
        title: "NoSQL Concepts",
        items: [
          "Document Structure",
          "Collections & Databases",
          "CRUD Operations",
          "Query Operators",
          "Indexing Basics",
        ],
      },
      {
        title: "MongoDB Tools",
        items: [
          "MongoDB Compass",
          "Mongoose ODM",
          "Aggregation Pipeline",
          "Schema Design",
          "Data Validation",
        ],
      },
      {
        title: "Learning Experience",
        experiences: [
          {
            title: "Web App Backend",
            description: "Experimenting with MongoDB for storing user data",
          },
          {
            title: "Data Modeling",
            description: "Learning to design flexible document schemas",
          },
        ],
      },
    ],
  },
  docker: {
    title: "Docker",
    icon: "🐳",
    level: "Beginner Level",
    description:
      "Docker ช่วยให้ฉันเข้าใจการทำงานของคอนเทนเนอร์และกระบวนการดีพลอยแอปพลิเคชัน เป็นเครื่องมือทรงพลังที่ช่วยสร้างสภาพแวดล้อมการพัฒนาที่เสถียรและสม่ำเสมอ ไม่ว่าจะทำงานบนเครื่องไหนก็ตาม",
    sections: [
      {
        title: "Containerization",
        items: [
          "Docker Images & Containers",
          "Dockerfile Creation",
          "Container Management",
          "Volume Mounting",
          "Network Configuration",
        ],
      },
      {
        title: "Development Workflow",
        items: [
          "Development Environments",
          "Multi-container Applications",
          "Docker Compose",
          "Image Optimization",
          "Deployment Basics",
        ],
      },
      {
        title: "Learning Journey",
        experiences: [
          {
            title: "Local Development",
            description: "Setting up consistent development environments",
          },
          {
            title: "Application Packaging",
            description: "Learning to containerize web applications",
          },
        ],
      },
    ],
  },
  aws: {
    title: "AWS",
    icon: "☁️",
    level: "Beginner Level",
    description:
      "Amazon Web Services ทำให้ฉันได้ก้าวเข้าสู่โลกของคลาวด์คอมพิวติ้งและโครงสร้างพื้นฐานที่สามารถขยายตัวได้ตามความต้องการ ฉันกำลังเรียนรู้วิธีการดีพลอยและโฮสต์ระบบสมัยใหม่ที่ทั้งยืดหยุ่นและรองรับการเติบโตของแอปพลิเคชัน",
    sections: [
      {
        title: "Core Services",
        items: [
          "EC2 Instances",
          "S3 Storage",
          "IAM Management",
          "CloudWatch Monitoring",
          "Lambda Functions",
        ],
      },
      {
        title: "Cloud Concepts",
        items: [
          "Scalability & Availability",
          "Security Best Practices",
          "Cost Optimization",
          "Deployment Strategies",
          "Backup & Recovery",
        ],
      },
      {
        title: "Exploration Areas",
        experiences: [
          {
            title: "Static Website Hosting",
            description: "Learning to host websites using S3 and CloudFront",
          },
          {
            title: "Cloud Architecture",
            description: "Understanding how to design cloud-based applications",
          },
        ],
      },
    ],
  },
};

// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.canvas = document.getElementById("matrix-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.characters =
      "01アイウエオカキクケコサシス0010101111001セソタチツテトナニヌネノハヒフヘホマ00011101101010111010110011001010110ミムメモヤユヨラリルレロワヲン";
    this.fontSize = 14;
    this.columns = 0;
    this.drops = [];

    this.resize();
    this.init();
    this.animate();

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns)
      .fill(0)
      .map(() => Math.random() * -100);
  }

  init() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#00ff41";
    this.ctx.font = this.fontSize + "px monospace";

    for (let i = 0; i < this.drops.length; i++) {
      const char =
        this.characters[Math.floor(Math.random() * this.characters.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize Matrix Effect
new MatrixRain();

// Project Modal Functions
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  // Populate modal content
  document.getElementById("modal-project-title").textContent = project.title;
  document.getElementById("modal-project-description").textContent =
    project.description;

  // Handle image
  const modalImage = document.getElementById("modal-project-image");
  const imagePlaceholder = document.getElementById("modal-image-placeholder");
  if (project.image) {
    modalImage.src = project.image;
    modalImage.alt = project.title + " Screenshot";
    modalImage.style.display = "block";
    imagePlaceholder.style.display = "none";
  } else {
    modalImage.style.display = "none";
    imagePlaceholder.style.display = "block";
  }

  // Populate tags
  const tagsContainer = document.getElementById("modal-project-tags");
  tagsContainer.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "modal-tag";
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
  });

  // Populate features
  const featuresContainer = document.getElementById("modal-project-features");
  featuresContainer.innerHTML = "";
  project.features.forEach((feature) => {
    const featureElement = document.createElement("li");
    featureElement.textContent = feature;
    featuresContainer.appendChild(featureElement);
  });

  // Handle links
  const liveLink = document.getElementById("modal-live-link");
  const githubLink = document.getElementById("modal-github-link");

  if (project.liveLink && project.liveLink !== "#") {
    liveLink.href = project.liveLink;
    liveLink.style.display = "flex";
  } else {
    liveLink.style.display = "none";
  }

  if (project.githubLink && project.githubLink !== "#") {
    githubLink.href = project.githubLink;
    githubLink.style.display = "flex";
  } else {
    githubLink.style.display = "none";
  }

  // Show modal
  const modal = document.getElementById("project-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Skill Modal Functions
function openSkillModal(skillId) {
  const skill = skillData[skillId];
  if (!skill) return;

  // Populate modal content
  document.getElementById("skill-icon").textContent = skill.icon;
  document.getElementById("skill-title").textContent = skill.title;
  document.getElementById("skill-level").textContent = skill.level;
  document.getElementById("skill-description").textContent = skill.description;

  // Populate skill details
  const detailsContainer = document.getElementById("skill-details");
  detailsContainer.innerHTML = "";

  skill.sections.forEach((section) => {
    const sectionElement = document.createElement("div");
    sectionElement.className = "skill-section";

    const titleElement = document.createElement("h4");
    titleElement.textContent = section.title;
    sectionElement.appendChild(titleElement);

    if (section.items) {
      const listElement = document.createElement("ul");
      listElement.className = "skill-list";

      section.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listElement.appendChild(listItem);
      });

      sectionElement.appendChild(listElement);
    } else if (section.experiences) {
      section.experiences.forEach((exp) => {
        const expElement = document.createElement("div");
        expElement.className = "experience-item";

        const expTitle = document.createElement("h5");
        expTitle.textContent = exp.title;
        expElement.appendChild(expTitle);

        const expDesc = document.createElement("p");
        expDesc.textContent = exp.description;
        expElement.appendChild(expDesc);

        sectionElement.appendChild(expElement);
      });
    }

    detailsContainer.appendChild(sectionElement);
  });

  // Show modal
  const modal = document.getElementById("skill-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSkillModal() {
  const modal = document.getElementById("skill-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modals when clicking outside
document
  .getElementById("project-modal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeProjectModal();
    }
  });

document.getElementById("skill-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeSkillModal();
  }
});

// Close modals with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
    closeSkillModal();
  }
});

// Add keyboard support for skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "light") {
    body.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
  } else {
    body.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate skill bars when skills section becomes visible
      if (entry.target.id === "skills") {
        const skillCategories =
          entry.target.querySelectorAll(".skill-category");
        skillCategories.forEach((category, index) => {
          setTimeout(() => {
            category.classList.add("animate");
          }, index * 200);
        });
      }
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Mobile Menu Toggle
// Mobile Menu Toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Navbar scroll effect
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.8)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.1)";
  }

  // Hide/show navbar on scroll
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Enhanced glass card hover effects
document
  .querySelectorAll(".glass-card, .project-card, .skill-item")
  .forEach((card) => {
    card.addEventListener("mouseenter", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 65, 0.1), var(--glass-bg))`;
    });

    card.addEventListener("mouseleave", function () {
      this.style.background = "var(--glass-bg)";
    });
  });
