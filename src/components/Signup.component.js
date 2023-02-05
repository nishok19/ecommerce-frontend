import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { signup } from "src/utils/auth.utils";
import Toast from "./Toast.component";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confPasswd, setConfPasswd] = useState("");

  const router = useRouter();

  const signupUser = async (e) => {
    e.preventDefault();

    if (
      passwd !== confPasswd ||
      name == "" ||
      email == "" ||
      passwd == "" ||
      confPasswd == ""
    )
      return null;

    const user = { username: name, email, password: passwd };
    const signupUser = await signup(user);
    if (signupUser.success) {
      // <Toast msg="User successfully created" />;
      router.push("/login");
    } else {
      return;
      // <Toast msg="User is not created, error" />
    }
    console.log("signeeddd ", signupUser);
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      {/* <!-- Signin component --> */}
      <div className="flex shadow-md">
        {/* <!-- Signin form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[36rem] h-[44rem]">
          <div className="w-[24rem]">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Signup</h1>
            {/* <small className="text-gray-400">
              Welcome back! Please enter your details
            </small> */}

            {/* <!-- Form --> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 focus:border-background-hover focus:outline-none focus:ring-1 focus:ring-background-hover py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 focus:border-background-hover focus:outline-none focus:ring-1 focus:ring-background-hover py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  value={passwd}
                  onChange={(e) => setPasswd(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 focus:border-background-hover focus:outline-none focus:ring-1 focus:ring-background-hover py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="*****"
                  value={confPasswd}
                  onChange={(e) => setConfPasswd(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 focus:border-background-hover focus:outline-none focus:ring-1 focus:ring-background-hover py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <button
                  onClick={signupUser}
                  className="mb-1.5 block w-full text-center text-white bg-background-default hover:bg-background-hover px-2 py-1.5 rounded-md"
                >
                  Register
                </button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <GoogleIcon />
                  Sign in with Google
                </button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="text-xs font-semibold text-background-default"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Login banner --> */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md w-[44rem] h-[44rem]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="/images/login-image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
