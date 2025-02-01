import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiHtmx } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { SiKubernetes, SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaGit } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa6";


export default function TechStack() {
  return (
    <section id="skills" className="dark:bg-[#353353] px-64 py-20">
      <h2 className="text-4xl font-bold text-[#454360]">Tech Stack</h2>
      <div className="divider"></div>

      <div className="grid grid-cols-5 gap-5 text-[#BAB9C6]">
        <FaGolang className="text-[100px]" />
        <BiLogoPostgresql className="text-[100px]" />
        <SiHtmx className="text-[100px]" />
        <FaDocker className="text-[100px]" />
        <SiKubernetes className="text-[100px]" />
        <TbBrandCpp className="text-[100px]" />
        <FaPython className="text-[100px]" />
        <FaHtml5 className="text-[100px]" />
        <FaCss3Alt className="text-[100px]" />
        <FaJs className="text-[100px]" />
        <FaReact className="text-[100px]" />
        <FaNodeJs className="text-[100px]" />
        <FaGit className="text-[100px]" />
        <FaLinux className="text-[100px]" />
        <FaUnity className="text-[100px]" />
        <SiTailwindcss className="text-[100px]" />
        <RiNextjsFill className="text-[100px]" />
      </div>
    </section>

  );
}
