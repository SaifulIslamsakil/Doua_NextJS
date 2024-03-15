import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import img from "../../../../public/duar_gurutto.svg"

const Categories = () => {
    return (
        <div className=" bg-white  ">
            <div className=" text-center p-4 bg-green-600 text-white rounded-t-lg ">
                <h1>Categories</h1>
            </div>
            <div className=" p-3">
                <div className=" flex items-center bg-white p-1 w-96 rounded-lg border mx-auto">
                    <span className=" text-xl  py-3 px-5 rounded-lg"><FaSearch /></span>
                    <input type="search " className=" p-1 w-full border-none outline-none" placeholder="Search Categories" name="" id="" />
                </div>
                <div className=" px-2 py-5 h-[360px] overflow-y-scroll space-y-5 ">
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-3 hover:bg-slate-200 p-2 rounded-lg">
                        <div className=" p-2 bg-slate-100 rounded-lg ">
                            <Image src={img} alt="Categories" width={30} height={30} />
                        </div>
                        <div>
                            <h3 className="  font-semibold">Dua's Importance</h3>
                            <p>SubCategories 7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;