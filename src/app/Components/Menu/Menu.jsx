import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegBookmark, FaRegLightbulb, FaBookReader} from "react-icons/fa";
import { RiGooglePlayFill } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";

import img from "../../../../public/dua-logo.svg"
const Menu = () => {
    const menu = <>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <GoHome />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <BiCategory />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <FaRegLightbulb />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <FaRegBookmark />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <RiGooglePlayFill />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <LuMessagesSquare />
            </Link>
        </li>
        <li className=" bg-slate-200 p-3 hover:bg-green-500 hover:text-white duration-500 rounded-full">
            <Link href={"#"} >
                <FaBookReader />
            </Link>
        </li>
        
    </>
    return (
        <div className=" bg-white  rounded-l-3xl rounded-r-lg py-6 h-[90vh] overflow-y-scroll  ">
            <Image className=" mx-auto shadow-2xl shadow-green-500 mb-10" src={img} alt="ss" />
            <ul className=" text-2xl p-5 space-y-6">
                {menu}
            </ul>
            <Image className=" mx-auto shadow-2xl shadow-green-500 my-10" src={img} alt="ss" />

        </div>
    );
};

export default Menu;