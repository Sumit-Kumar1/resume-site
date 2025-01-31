import Link from "next/link";
import { SiCodechef, SiKaggle, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profiles() {
    return (
        <ul className={"flex gap-7 w-full justify-center p-3"}>
            <li className="text-white hover:text-[#ffc107] hover:cursor-pointer">
                <Link href="https://www.kaggle.com/sumit1kumar" target="_blank"><SiKaggle size={32}></SiKaggle></Link>
            </li>
            <li className="text-white hover:text-[#ffc107] hover:cursor-pointer">
                <Link href="https://github.com/Sumit-Kumar1" target="_blank"><FaGithub size={25}></FaGithub></Link>
            </li>
            <li className="text-white hover:text-[#ffc107] hover:cursor-pointer">
                <Link href="https://www.linkedin.com/in/sumit1kumar/" target="_blank"><FaLinkedin size={25}></FaLinkedin></Link>
            </li>
            <li className="text-white hover:text-[#ffc107] hover:cursor-pointer">
                <Link href={"https://leetcode.com/Dark_Blood/"} target="_blank"><SiLeetcode size={25}></SiLeetcode></Link>
            </li>
            <li className="text-white hover:text-[#ffc107] hover:cursor-pointer">
                <Link href={"https://www.codechef.com/users/dark_blood"} target="_blank"><SiCodechef size={25}></SiCodechef></Link>
            </li>
        </ul>
    );
}