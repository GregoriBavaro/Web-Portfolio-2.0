type MenuItem = {
  id: number;
  title: string;
  folderColor: string;
  list: Array<{
    id: number;
    title: string;
    text: any[];
  }>;
};

export const MENU_LIST: MenuItem[] = [
  {
    id: 0,
    title: "bio",
    folderColor: "--red-orange",
    list: [
      {
        id: 0,

        title: "summery.md",
        text: [
          "/**",
          " * About Gregori Bavaro",
          <>
            * <span>Welcome to my portfolio.</span>
          </>,
          " *",
          " * I am Gregori Bavaro, a passionate Web Developer with 3 years of experience",
          " * in creating modern, responsive, and user-friendly websites. I specialize",
          " * in utilizing the latest web technologies such as Next.js, React, TypeScript,",
          " * and SCSS to build dynamic and performant web applications. With a strong",
          " * foundation in front-end development and SEO optimization, I aim to craft",
          " * digital experiences that are both visually appealing and highly functional.",
          " *",
          " * Over the years, I have worked on a variety of projects, from developing",
          " * websites for digital services to building custom solutions for luxury",
          " * restaurant brands. I have developed a keen eye for detail, ensuring that",
          " * each project I work on is executed with the utmost precision and creativity.",
          " * I am deeply invested in creating seamless user interfaces and experiences",
          " * that are intuitive and accessible.",
          " *",
          <>
            * <span>My technical expertise includes:</span>
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>JAVASCRIPT:</span>{" "}
            Crafting robust, scalable solutions for web applications.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>REACT:</span>{" "}
            Building interactive and stateful UI components with React.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>NEXT.JS:</span>{" "}
            Developing SEO-friendly, server-side rendered applications, with
            Next.js.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>TYPESCRIPT:</span>{" "}
            Ensuring type safety and maintainability of complex applications.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>SCSS & CSS:</span>{" "}
            Writing clean, organized styles to ensure beautiful and responsive
            designs.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>FRAMER MOTION:</span>{" "}
            Implementing smooth and engaging animations for modern web
            applications.
          </>,
          <>
            * <span style={{ color: "var(--red-orange)" }}>SEO:</span> Improving
            website SEO with JSON-LD, sitemaps, and i18next for multi-language
            support.
          </>,
          " * I take pride in writing clean, maintainable code and following best practices",
          " * to ensure that every project I work on is future-proof and scalable. My",
          " * approach to web development is centered around the needs of the user,",
          " * ensuring that the final product is not only functional but also delightful",
          " * to interact with.",
          " *",
          " * Outside of technical skills, I am a firm believer in continuous learning",
          " * and growth. I constantly challenge myself to improve my knowledge and",
          " * expertise, keeping up-to-date with emerging trends in web development.",
          " * Whether it’s learning new frameworks, optimizing performance, or exploring",
          " * new design patterns, I am always looking for ways to expand my capabilities.",
          " *",
          " * I am driven by a love for creating innovative solutions and delivering",
          " * exceptional experiences through web development. I am constantly excited",
          " * about the possibility of turning ideas into fully-fledged digital products",
          " * that users will love.",
          " */",
        ],
      },
      {
        id: 1,

        title: "career-goals.md",
        text: [
          "/**",
          <>
            * <span>Career Goals:</span>
          </>,
          " * - My goal is to continue growing as a web developer and to deepen my",
          " *   expertise in backend development, with a focus on learning Node.js",
          " *   as my primary backend language.",
          " * - I am excited about expanding my skill set and taking on more complex",
          " *   projects that involve both frontend and backend development.",
          " * - My aim is to become a full-stack developer, capable of building",
          " *   end-to-end solutions that are efficient and scalable.",
          " * - I look forward to working on larger, more challenging projects that",
          " *   allow me to continuously improve and innovate.",
          " */",
        ],
      },
      {
        id: 3,

        title: "fun-facts.md",
        text: [
          "/**",
          <>
            * <span>Fun Facts:</span>
          </>,
          " * - When I’m not coding, I love watching movies and series, especially",
          " *   *The Lord of the Rings* trilogy, which is one of my all-time favorites.",
          " * - I also enjoy doing Lego, and I find it to be a great way to relax and",
          " *   challenge my creativity.",
          " * - My cat, Daki, is a beautiful albino with blue eyes, and she’s a huge",
          " *   part of my life. She's always around when I'm working.",
          " * - I’m passionate about food and enjoy trying out new recipes and dishes.",
          " * - Photography is another hobby of mine, and I love capturing moments",
          " *   during my travels.",
          " * - I’m constantly learning new things, whether it’s through courses,",
          " *   reading, or exploring new activities.",
          " */",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "education",
    folderColor: "--deep-purple",
    list: [
      {
        id: 0,

        title: "certifications.md",
        text: [
          "/**",
          <>
            * <span>Certification: Academy for Programming</span>
          </>,
          " * Issued by Seavus Education and Development Center in November 2022",
          " * This certification covered a wide range of web development technologies and tools,",
          " * including SASS, ASP.NET MVC, ASP.NET Web API, C#, React.js, JavaScript, SQL, .NET MAUI, and HTML5.",
          " * It helped me deepen my understanding of full-stack development, with a focus on modern web",
          " * technologies and frameworks.",
          <>
            * You can view more about this certification here:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1C6sSNLb15b880gV0TzWGSZ_w2x9yLPQJ/view"
            >
              [Seavus Education and Development Center]
            </a>
          </>,
          " */",
          <>
            *{" "}
            <span>
              Certification: The Complete JavaScript Course 2022: From Zero to
              Expert
            </span>
          </>,
          " * Issued by Udemy in January 2023",
          " * Credential ID: UC-5343c92f-4979-4070-90c9-46bac4f45164",
          " * This course provided a comprehensive understanding of JavaScript, starting from the basics and",
          " * progressing to advanced topics. It solidified my foundation in JavaScript and equipped me with",
          " * the skills to build robust web applications.",
          <>
            * You can view the course details here:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.udemy.com/certificate/UC-5343c92f-4979-4070-90c9-46bac4f45164/"
            >
              [The Complete JavaScript Course 2022]
            </a>
          </>,
          " */",
          <>
            *{" "}
            <span>
              Certification: React - The Complete Guide (incl. Hooks, React
              Router, Redux)
            </span>
          </>,
          " * Issued by Udemy in March 2023",
          " * Credential ID: UC-f9c184cs-01aa-490f-a59c-037aabbd35ba",
          " * This course provided an in-depth exploration of React, including React Hooks, React Router, and Redux.",
          " * It further enhanced my ability to build modern, dynamic web applications with React.js, making me",
          " * proficient in advanced React concepts and best practices.",
          <>
            * You can view the course details here:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.udemy.com/certificate/UC-f9c184ce-01aa-490f-a59c-037aabbd35ba/"
            >
              [React - The Complete Guide]
            </a>
          </>,
          " */",
        ],
      },
      {
        id: 1,
        title: "high-school.md",
        text: [
          "/**",
          <>
            * <span>High School Education - Private American School</span>
          </>,
          " * I attended a private American school where I studied in English, following the",
          " * American educational system.",
          " * I successfully graduated in 2010, and during high school, my English skills",
          " * significantly improved as I read numerous books and engaged deeply with the",
          " * language.",
          " * This experience not only enhanced my English proficiency but also gave me a solid",
          " * foundation in critical thinking and problem-solving.",
          " * The American education system provided me with a broader perspective, and I",
          " * developed a passion for learning that continues to this day.",
          " */",
        ],
      },
      {
        id: 2,
        title: "university.md",
        text: [
          "/**",
          <>
            * <span>University Education - Private American University</span>
          </>,
          " * I attended a private American university where I studied in English, under the guidance",
          " * of distinguished professors, many of whom were diplomats from high EU positions.",
          " * My studies began in 2010 and I graduated in 2014 with a specialization in diplomacy,",
          " * international relations, and business.",
          " * I continued my education with a one-year specialization and completed a Master's degree",
          " * in diplomacy, international relations, and business in 2016.",
          " * This educational journey not only refined my academic skills but also broadened my",
          " * understanding of global affairs and international business, providing a unique blend",
          " * of knowledge that complemented my career in technology and development.",
          " */",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "languages",
    folderColor: "--amber",
    list: [
      {
        id: 0,

        title: "programming-languages.md",
        text: [
          "/**",
          <>
            * <span>Programming Languages and Technologies</span>
          </>,
          " * - JAVASCRIPT: JavaScript is my primary language, and I have a deep mastery",
          " *   of it, especially in building dynamic and interactive web applications.",
          " * - REACT: I have mastered React to create scalable and performant user interfaces.",
          " * - NEXT.JS: I am highly skilled in Next.js for developing SEO-friendly, server-side",
          " *   rendered applications with fast performance.",
          " * - CSS & SCSS: I excel in writing clean and responsive designs using CSS and SCSS,",
          " *   ensuring my websites are visually appealing and work seamlessly across all devices.",
          " * - FRAMER MOTION: I implement smooth and engaging animations with Framer Motion,",
          " *   creating modern web experiences that delight users.",
          " * - ZUSTAND & REDUX TOOLKIT: I have mastered global state management with Zustand",
          " *   and Redux Toolkit, ensuring efficient state management in large React applications.",
          " * - SEO: I am proficient in optimizing websites for search engines, using tools like",
          " *   Google Search Console, sitemaps, metadata, and other SEO strategies to improve visibility.",
          " * - UX/UI: I pay great attention to UX/UI design, always ensuring that my web applications",
          " *   provide seamless, intuitive, and enjoyable user experiences.",
          " */",
        ],
      },
      {
        id: 1,

        title: "spoken-languages.md",
        text: [
          "/**",
          <>
            * <span>Spoken Languages</span>
          </>,
          " * - MACEDONIAN: Native speaker of Macedonian, fluent in both speaking and writing.",
          " * - SERBIAN & CROATIAN: I understand and speak both Serbian and Croatian,",
          " *   allowing me to communicate effectively with speakers of these languages.",
          " * - ENGLISH: I speak and write English fluently, enabling me to work and communicate",
          " *   in international environments with ease.",
          " * - FUTURE PLANS: I am also eager to learn other languages in the future, depending",
          " *   on where I move to work, to further broaden my communication skills.",
          " */",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "interest",
    folderColor: "--emerald-green",
    list: [
      {
        id: 0,

        title: "web-development.md",
        text: [
          "/**",
          <>
            * <span>Web Development Interest</span>
          </>,
          " * I am deeply passionate about web development and constantly fascinated by the ever-evolving",
          " * landscape of technology. My interest lies in building intuitive, responsive, and visually appealing",
          " * websites and applications. I enjoy learning new frameworks, libraries, and best practices to improve",
          " * both the functionality and user experience of web solutions.",
          " *",
          " * I am particularly drawn to front-end development, where I can bring designs to life with seamless",
          " * animations and interactions, using modern technologies like React, Next.js, and SCSS.",
          " *",
          " * Beyond just coding, I focus on creating websites that are both visually stunning and user-friendly.",
          " * I pay great attention to UI/UX design principles and prioritize responsive, mobile-first designs.",
          " * SEO optimization is another area I enjoy, ensuring that every website I build is easily discoverable.",
          " *",
          " * The challenge of solving complex problems and creating meaningful digital experiences drives my",
          " * passion for web development. I look forward to continuing to grow in this field and contributing",
          " * to projects that have a positive impact on users.",
          " */",
        ],
      },
      {
        id: 1,
        title: "open-source-contributions.md",
        text: [
          "/**",
          <>
            * <span>Open Source Contribution: LearnHub.mk</span>
          </>,
          " * I had the privilege of contributing to LearnHub.mk, an innovative online learning platform",
          " * aimed at empowering web developers. As part of a collaborative team that included developers,",
          " * product owners, designers, and other stakeholders, I worked to help build a community-driven space",
          " * where developers—junior and senior alike—can grow their skills and engage in real-world projects.",
          " *",
          " * LearnHub.mk is focused on providing high-quality educational resources, fostering community interaction,",
          " * and creating opportunities for mentorship and collaboration. It offers comprehensive learning resources,",
          " * community forums for discussion, collaborative projects, and access to mentorship from experienced professionals.",
          " *",
          " * I worked with a team of passionate individuals, applying my web development skills, particularly with Next.js,",
          " * React, and SASS, to help build and optimize the platform. The project emphasized creating responsive, user-friendly",
          " * interfaces and improving performance through efficient code practices.",
          " *",
          " * LearnHub.mk also focuses on leveraging modern tools and technologies, including React Query for data fetching,",
          " * React Bootstrap for UI components, and ESLint for ensuring consistent and high-quality code.",
          " *",
          " * I am proud to have contributed to a platform that helps nurture the next generation of web developers and offers",
          " * a supportive space for learning and growth.",
          " *",
          <>
            * Visit:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://learnhub.mk"
            >
              {" "}
              LearnHub.mk
            </a>
          </>,
          " */",
        ],
      },
      {
        id: 3,
        title: "hobbies.md",
        text: [
          "/**",
          <>
            * <span>Hobbies and Interests</span>
          </>,
          " * Outside of coding, I have a wide range of hobbies and interests that help me unwind and stay inspired.",
          " *",
          " * 🎮 Gaming: I enjoy gaming as a way to relax and immerse myself in different worlds. Whether it's strategy,",
          " * action, or adventure, gaming offers me a way to challenge my mind and connect with others.",
          " *",
          " * 🎬 Movies: I love watching movies and series in my free time, especially epic fantasy films like The Lord of the Rings.",
          " * They offer a perfect escape and fuel my creativity. The intricate storytelling and world-building in movies",
          " * like The Lord of the Rings trilogy are some of my favorites.",
          " *",
          " * ✈️ Travel: Traveling is another passion of mine. I love exploring new cultures, trying new foods, and seeing",
          " * beautiful places. Traveling broadens my horizons and gives me fresh ideas that I often apply to my work.",
          " *",
          " * 📸 Photography: Photography allows me to capture moments, emotions, and beautiful scenes. It's a creative outlet",
          " * where I can appreciate the artistry in everyday life and nature, and it enhances my attention to detail.",
          " *",
          " * 🚶‍♂️ Walking: Walking is one of my favorite ways to clear my mind, stay active, and gather inspiration from my surroundings.",
          " * Whether it's a stroll through the park or exploring a new city, walking helps me reflect, relax, and think creatively.",
          " *",
          " * These hobbies not only provide relaxation but also inspire me to think differently and incorporate new ideas",
          " * into my work and life. Whether it's capturing a beautiful shot or exploring a new game or movie, my hobbies help",
          " * me to stay creative and motivated.",
          " */",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "experience",
    folderColor: "--orchid-purple",
    list: [
      {
        id: 0,
        title: "freelance.md",
        text: [
          "/**",
          <>
            * <span>Freelance Work</span>
          </>,
          " * I have worked on multiple projects for companies,",
          " * small businesses, and startups in Macedonia. Many times, I built",
          " * web applications from the ground up, covering design, UX/UI, coding,",
          " * deployment, and SEO optimization.",
          " */",
        ],
      },
      {
        id: 1,
        title: "work.md",
        text: [
          "/**",
          <>
            * <span>Work Experience</span>
          </>,
          " * I have experience working with a large group of developers at LearnHub,",
          " * a learning platform where I developed the platform itself",
          " * following industry standards. My role involved ensuring",
          " * high performance, clean code, and a seamless user experience.",
          " */",
        ],
      },
    ],
  },
];
