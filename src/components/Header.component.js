import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  // const router = useRouter();

  return (
    <header className="bg-background-default py-4 text-white flex items-center">
      {/* logo */}
      <div className="basis-1/8">
        <Image
          src="/carter-logo.png"
          alt="logo"
          width={80}
          height={40}
          className="ml-8 object-contain"
        />
      </div>

      {/* menu */}
      <div className="basis-2/4 ml-16">
        <ul className="flex space-x-[6rem]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Cart</Link>
          </li>
        </ul>
      </div>

      {/* user-profile */}
      <div className="flex basis-1/3">
        {/* search field */}
        <div className="basis-2/3 flex">
          <MagnifyingGlassIcon className="w-6 h-auto mx-3" />
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-[30rem] text-black"
          />
        </div>
        <div className="basis-1/3 ml-6 items-center flex">
          UserName <ChevronDownIcon className="w-4" />
        </div>
      </div>

      {/* cart */}
      <div className="basis-1/8 ml-auto mr-[44px]">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <ShoppingCartIcon className="w-8 h-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
