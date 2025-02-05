import type { Metadata } from "next";
import Sidebar from "../../components/ui/sidebar/Sidebar";
import TabsContent from "../../components/layout/tabsContent/TabsContent";



import { MENU_LIST } from "../../db/about";

export const metadata: Metadata = {
  title: "About Me | Gregori Bavaro",
  description:
    "Learn more about Gregori Bavaro, a passionate web developer with expertise in web design, development, and SEO optimization. Discover my journey, skills, and approach to creating impactful web solutions.",
};

const About = () => {
  return (
    <>
      <Sidebar data={MENU_LIST} />
      <TabsContent data={MENU_LIST}/>
    </>
  );
};

export default About;
