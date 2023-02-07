import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserStore } from "src/slices/userSlice";
import { login } from "src/utils/auth.utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = async (e) => {
    e.preventDefault();
    const user = { email, password: passwd };
    const res = await login(user);

    if (!res.success) {
      router.push("/login");
    } else {
      dispatch(addUserStore(res.user));
      router.push("/");
    }
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      {/* <!-- Login component --> */}
      <div className="flex shadow-md">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[36rem] h-[44rem]">
          <div className="w-[24rem]">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Log In</h1>
            <small className="text-gray-400">
              Welcome back! Please enter your details
            </small>

            {/* <!-- Form --> */}
            <form className="mt-4">
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

              <div className="mb-3 flex flex-wrap content-center">
                {/* <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-purple-700"
                />
                <label for="remember" className="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label> */}
                <a
                  href="#"
                  className="text-xs font-semibold text-background-default"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button
                  onClick={loginUser}
                  className="mb-1.5 block w-full text-center text-white bg-background-default hover:bg-background-hover px-2 py-1.5 rounded-md"
                >
                  Log in
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
                Don't have account?
              </span>
              <Link
                href="/signup"
                className="text-xs font-semibold text-background-default"
              >
                Sign up
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

export default Login;
