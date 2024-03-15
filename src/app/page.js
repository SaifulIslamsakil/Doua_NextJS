import Image from "next/image";
import Categories from "./Components/Categories/Categories";

export default function Home() {
  return (
    <div className=" grid grid-cols-5 gap-5">
      <div className=" col-span-2">
          <Categories></Categories>
      </div>
      <div className=" col-span-3">
          <h2 className=" bg-green-500">ddd</h2>
      </div>

    </div>
  );
}
