import type { Metadata } from "next";

import Sidebar from "../../components/ui/sidebar/Sidebar";
import TabsContent from "../../components/layout/tabsContent/TabsContent";

import { PROJECTS } from "../../db/projects/projects";

export const metadata: Metadata = {
  title: "Projects | Gregori Bavaro's Web Development Portfolio",
  description:
    "Explore the projects crafted by Gregori Bavaro, showcasing cutting-edge web design and development solutions. From frontend development with React and Next.js to SEO-optimized websites, discover my work and expertise.",
};

const Projects = () => {
  return (
    <>
      <Sidebar data={PROJECTS} />
      <TabsContent data={PROJECTS} />
    </>
  );
};

export default Projects;
