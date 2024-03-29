import Link from "next/link";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "src/utils/auth.utils";
import { resetCategryStore } from "src/slices/categorySlice";
import {
  addSearchedProductsStore,
  resetProductsStore,
} from "src/slices/productSlice";
import { resetUserStore } from "src/slices/userSlice";
import { addToastStore } from "src/slices/toastSlice";
import { useRouter } from "next/router";
import { searchProducts } from "src/utils/products.utils";
import { useState } from "react";

const Header = () => {
  const currUser = useSelector((state) => state.user.user);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = async () => {
    const res = await logout();
    dispatch(resetCategryStore());
    dispatch(resetProductsStore());
    dispatch(resetUserStore());
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Something went wrong. Cannot logout",
          type: "error",
        })
      );
    }

    router.push("/login");
  };

  const searchText = async () => {
    const res = await searchProducts(text);
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Cannot search",
          type: "error",
        })
      );
    }
    dispatch(addSearchedProductsStore(res.products));

    router.push("/search");
  };

  return (
    <header className="bg-background-default py-4 text-white flex items-center sticky top-0 z-50">
      {/* logo */}
      <div className="basis-1/8">
        <img
          src="/carter-logo.png"
          alt="logo"
          className="ml-8 object-contain w-[80px] h-auto"
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
            <Link href={"/myorders"}>My Orders</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
        </ul>
      </div>

      {/* user-profile */}
      <div className="flex basis-1/3">
        {/* search field */}
        <div className="basis-2/3 flex items-center">
          <button onClick={searchText}>
            <SearchOutlinedIcon className="" />
          </button>
          <input
            type="text"
            placeholder="Type here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input w-full max-w-[30rem] text-black bg-[#fff]"
          />
        </div>
        <div className="basis-1/3 ml-6 items-center flex">
          <div className="dropdown">
            <label tabIndex={0} className="m-1">
              {currUser?.username}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow text-background-default bg-white rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li>
                  <a onClick={logoutUser}>Logout</a>
                </li>
              </ul>
              <KeyboardArrowDownOutlinedIcon />
            </label>
          </div>
        </div>
      </div>

      {/* cart */}
      <div className="basis-1/8 ml-auto mr-[44px]">
        <Link href={"/cart"} className="indicator">
          <span className="indicator-item badge badge-secondary">
            {currUser?.cart?.length}
          </span>
          <ShoppingCartOutlinedIcon className="text-[32px]" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
