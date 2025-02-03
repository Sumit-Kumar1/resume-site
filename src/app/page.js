import AboutMe from "../components/about";
import ContactMe from "../components/contactme";
import Experience from "../components/experience";
import Intro from "../components/intro";
import TechStack from "../components/techStack";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <TechStack></TechStack>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}
