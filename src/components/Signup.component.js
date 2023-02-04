import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

const Signup = () => {
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
                <label className="mb-2 block text-xs font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
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
                  className="block w-full rounded-md border border-gray-300 focus:border-background-hover focus:outline-none focus:ring-1 focus:ring-background-hover py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-background-default hover:bg-background-hover px-2 py-1.5 rounded-md">
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
                Already have an account?
              </span>
              <Link
                href="#"
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
