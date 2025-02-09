import desktop1 from "../../assets/mocks/sienna/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/sienna/desktop/desktop (2).png";
import desktop3 from "../../assets/mocks/sienna/desktop/desktop (3).png";
import desktop4 from "../../assets/mocks/sienna/desktop/desktop (4).png";
import desktop5 from "../../assets/mocks/sienna/desktop/desktop (5).png";
import desktop6 from "../../assets/mocks/sienna/desktop/desktop (6).png";

import tablet1 from "../../assets/mocks/sienna/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/sienna/tablet/tablet (2).png";
import tablet3 from "../../assets/mocks/sienna/tablet/tablet (3).png";

import mobile1 from "../../assets/mocks/sienna/mobile/mobile (1).png";
import mobile2 from "../../assets/mocks/sienna/mobile/mobile (2).png";
import mobile3 from "../../assets/mocks/sienna/mobile/mobile (4).png";
import mobile4 from "../../assets/mocks/sienna/mobile/mobile (5).png";
import mobile5 from "../../assets/mocks/sienna/mobile/mobile (6).png";

import { FaReact } from "react-icons/fa";

export const SIENNA = {
  id: 7,
  icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
  title: "sienna.jsx",
  website: "https://www.sienna.mk/",
  mocks: [
    mobile1,
    mobile5,
    mobile2,
    mobile3,
    mobile4,
    tablet1,
    tablet2,
    tablet3,
    desktop1,
    desktop2,
    desktop3,
    desktop4,
    desktop5,
    desktop6,
  ],
  text: [
    "/**",
    " * Project: Sienna Pastry Boutique",
    <>
      * <span>Freelance React Developer | Sep 2023 - Aug 2024</span>
    </>,
    " *",
    " * I independently designed and developed the entire website for Sienna Pastry Boutique,",
    " * a premium pastry brand. The project was built using React.js with Framer Motion",
    " * for smooth and engaging animations, enhancing the overall user experience.",
    " *",
    " * Every aspect of the site was carefully planned, from UI/UX design to",
    " * responsiveness and seamless interactions across all devices.",
    " *",
    " * Key Features & Achievements:",
    " * - Developed in React.js with Framer Motion for animations.",
    " * - Used Redux Toolkit for global state management, ensuring efficiency.",
    " * - Designed a modern, user-friendly interface with a fully responsive layout.",
    " * - Implemented a feature-rich cart system that follows best industry standards.",
    " * - Integrated a date-picker in the cart, allowing users to schedule orders,",
    " *   with non-working days clearly labeled for convenience.",
    " * - Built an email notification system using EmailJS, ensuring real-time order",
    " *   confirmations for both customers and the owner.",
    " * - Optimized performance for fast load times and smooth browsing experience.",
    " * - Deployed the website on Vercel with a custom domain setup.",
    " * - Implemented full SEO optimization, including structured data, sitemaps,",
    " *   and integration with Google Search Console for indexing and tracking.",
    " *",
    <>
      * Link to project:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.sienna.mk/"
      >
        [Sienna Pastry Boutique]
      </a>
    </>,
    " */",
    " ",
  ],
};
