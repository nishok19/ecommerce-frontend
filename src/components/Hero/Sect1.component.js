import Link from "next/link";

const Section1 = () => {
  return (
    <>
      {/* Banner */}
      <div className="flex justify-center w-full h-auto  bg-gradient-to-b from-background-default to-[#416dff] rounded-lg ">
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

      <div className="flex justify-around w-full mt-12">
        {/* Card 1 */}
        <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/shoe.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fashion</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Browse</button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/shoe.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronics</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Browse</button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/shoe.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Furniture</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Browse</button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/shoe.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Appliances</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Browse</button>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
          <figure>
            <img src="/images/shoe.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Offers</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Browse</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
