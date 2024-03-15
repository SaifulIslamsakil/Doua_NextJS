import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import User from "../../../../public/profile.svg"
const Navbar = () => {
    return (
        <div className="  flex justify-between items-center  ">
            <h2 className=" text-3xl  ">Duas Page</h2>
            <div className=" flex items-center gap-20">
            <div className=" flex items-center bg-white p-1 w-96 rounded-lg">
                    <input type="search " className=" p-1 w-full border-none outline-none" placeholder="Search by dua name" name="" id="" />
                    <span className=" text-xl bg-slate-100 py-3 px-5 rounded-lg"><FaSearch /></span>
                </div> 
                <div className=" flex items-center text-3xl gap-5 ">
                    <Image src={User} alt="user" width={50} height={50} />
                    <p className=" text-green-500"><IoIosSettings /></p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;