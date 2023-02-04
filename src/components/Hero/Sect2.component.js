import { Carousel } from "react-responsive-carousel";

const Sect2 = () => {
  return (
    <div className="flex justify-between items-center mt-20 max-w-screen-2xl mx-[160px]">
      {/* Section-2 Left section */}
      <div className="flex flex-col items-center justify-around space-y-[40px]">
        {/* Left Section - 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">COUPONS!</h2>
            <p>Get crazy offers using the COUPON code!!</p>
            <p className="text-gray-500 text-[11px]">
              USE CODE "GET10" TO AVAIL 10% OFFER
            </p>
            <div className="card-actions justify-end">
              <button className="btn">Use Now</button>
            </div>
          </div>
        </div>
        {/* Left Section - 2 */}
        <div className="flex flex-col">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Singup Now</h2>
              <div className="flex flex-col space-y-4">
                <button className="btn">Login</button>
                <button className="btn">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-2 Right section */}
      <div className="flex items-center justify-around h-[400px] bg-gradient-to-r from-cyan-500 to-white rounded-lg">
        <div className="basis-1/3 text-[32px] w-[500px]">
          Today's Hot Deals!!! Check this...
        </div>
        <div className="basis-2/3 max-w-[600px]">
          <FavCarousel />
        </div>
      </div>
    </div>
  );
};

const FavCarousel = () => {
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className=""
      >
        <div>
          <img loading="lazy" src="/images/shoe.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img loading="lazy" src="/images/shoe.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img loading="lazy" src="/images/shoe.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Sect2;
