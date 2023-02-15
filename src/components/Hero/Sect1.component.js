import Link from "next/link";

const Section1 = () => {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center w-full h-[80vh]  bg-gradient-to-b from-background-default via-[#416dff] to-white rounded-lg ">
        {/* Banner Left */}
        <div className="basis-1/3 ml-[120px] text-gray-50 flex flex-col justify-center ">
          <h2 className="text-[56px] font-extrabold ">Your Style Speaks</h2>
          <p className="text-[24px] font-semibold text-gray-100 ">
            Easy way to shop anyway
          </p>
          <p className="text-[18px] text-gray-200 mt-4">
            A one stop shop for everything you need. Major selling site for
            small to large dealers. Fashionable, Trustable, Reliable.
          </p>
          {/*  */}
          <div className="mt-6">
            <Link href="/products" className="btn">
              Shop Now!
            </Link>
          </div>
          {/*  */}
        </div>
        {/* Banner Right */}
        <div className="basis-2/3 ml-[120px] ">
          <img
            src="images/banner-svg.svg"
            alt="img"
            className="w-[90%] h-[600px] "
          />
        </div>
      </div>

      {/* Product sections dispaly - Card components */}
      <div className="flex w-full h-[300px] mt-12 justify-center space-x-[100px] ">
        {/* Card 1 */}
        <div className="h-auto w-72 relative cursor-pointer mb-5 group ">
          <div className="absolute inset-0 opacity-20 rounded-lg shadow-2xl group-hover:opacity-90 duration-300 ">
            <img
              src="/images/category/fashion.jpeg"
              alt="Fashion"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute inset-0 transform group-hover:-rotate-45 transition duration-300 ">
            <div className="h-full w-full rounded-lg shadow-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold text-[44px] flex items-center justify-center ">
              Fashion
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-auto w-72 relative cursor-pointer mb-5 group ">
          <div className="absolute inset-0 opacity-20 rounded-lg shadow-2xl group-hover:opacity-90 duration-300 ">
            <img
              src="/images/category/electronics.jpg"
              alt="Fashion"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute inset-0 transform group-hover:-rotate-45 transition duration-300">
            <div className="h-full w-full rounded-lg shadow-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold text-[44px] flex items-center justify-center ">
              Electronics
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="h-auto w-72 relative cursor-pointer mb-5 group ">
          <div className="absolute inset-0 opacity-20 rounded-lg shadow-2xl group-hover:opacity-90 duration-300 ">
            <img
              src="/images/category/furniture.jpg"
              alt="Fashion"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute inset-0 transform group-hover:-rotate-45 transition duration-300">
            <div className="h-full w-full rounded-lg shadow-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold text-[44px] flex items-center justify-center ">
              Furniture
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="h-auto w-72 relative cursor-pointer mb-5 group ">
          <div className="absolute inset-0 opacity-20 rounded-lg shadow-2xl group-hover:opacity-90 duration-300 ">
            <img
              src="/images/category/appliances.jpg"
              alt="Fashion"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute inset-0 transform group-hover:-rotate-45 transition duration-300">
            <div className="h-full w-full rounded-lg shadow-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold text-[44px] flex items-center justify-center ">
              Appliances
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Section1;
