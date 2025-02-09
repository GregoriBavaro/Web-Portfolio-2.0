import { FaReact } from "react-icons/fa";

import mobile1 from "../../assets/mocks/catalyst/mobile/mobile (1).png";
import mobile2 from "../../assets/mocks/catalyst/mobile/mobile (2).png";

import tablet1 from "../../assets/mocks/catalyst/tablet/tablet (1).png";
import tablet2 from "../../assets/mocks/catalyst/tablet/tablet (2).png";
import tablet3 from "../../assets/mocks/catalyst/tablet/tablet (3).png";
import tablet4 from "../../assets/mocks/catalyst/tablet/tablet (4).png";

import desktop1 from "../../assets/mocks/catalyst/desktop/desktop (1).png";
import desktop2 from "../../assets/mocks/catalyst/desktop/desktop (2).png";
import desktop3 from "../../assets/mocks/catalyst/desktop/desktop (3).png";

export const CATALYST = {
  id: 5,
  icon: <FaReact style={{ color: "var(--sky-blue)" }} />,
  title: "catalyst.tsx",
  sourceCode: "https://github.com/GregoriBavaro/Catalyst",
  website: "https://www.catalyst.mk/",
  mocks: [
    mobile1,
    mobile2,
    tablet1,
    tablet2,
    tablet3,
    tablet4,
    desktop1,
    desktop2,
    desktop3,
  ],
  text: [
    "/**",
    " * Project: Catalyst",
    <>
      * <span>Co-Founder & Solo Developer | May 2024 - 2025</span>
    </>,
    " *",
    " * As the co-founder and sole developer, I designed, developed, and launched Catalyst,",
    " * a startup agency specializing in web development, design, and marketing.",
    " * Built the entire Next.js platform, ensuring seamless user experience and advanced",
    " * functionality.",
    " * Responsible for all aspects of development, including SEO, performance, and",
    " * client-focused features.",
    " * Focused on delivering high-quality, responsive solutions, utilizing Framer Motion for",
    " * animations.",
    " *",
    " * Key Features & Achievements:",
    " * - Developed with Next.js, React, SCSS, and TypeScript for modern web architecture.",
    " * - Integrated Framer Motion for smooth animations and enhanced user experience.",
    " * - Optimized SEO with keyword strategies, structured data, and performance improvements.",
    " * - Created responsive, dynamic content, including portfolios and service pages.",
    " * - Managed all aspects of the platform, ensuring top-quality design and functionality.",
    " *",
    " * Catalyst aims to empower businesses by providing tailored solutions to succeed in",
    " * the digital landscape.",
    " *",
    <>
      * Link to project:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.catalyst.mk/"
      >
        [Catalyst]
      </a>
    </>,
    " *",
    <>
      * Source code:{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/GregoriBavaro/Catalyst"
      >
        [GitHub Repository]
      </a>
    </>,
    " */",
    " ",
  ],
};
