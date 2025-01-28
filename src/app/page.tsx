import type { Metadata } from "next";

import Hero from "../components/layout/hero/Hero";

export const metadata: Metadata = {
  title: "Gregori Bavaro | Frontend Developer & Web Solutions",
  description:
    "Welcome to the online portfolio of Gregori Bavaro, a skilled web developer specializing in React, Next.js, and CSS. Explore my work and get in touch to discuss your next web project.",
};

const Home = () => {
  return <Hero />;
};

export default Home;
