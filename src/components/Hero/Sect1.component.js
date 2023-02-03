import Image from "next/image";

import sampleImg from "public/carter-logo.png";

const Section1 = () => {
  return (
    <div className="flex justify-around w-full">
      {/* Card 1 */}
      <div className="card w-72 h-[20rem] bg-base-100 shadow-xl image-full">
        <figure>
          <img src="/shoe.jpg" alt="Shoes" />
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
          <img src="/shoe.jpg" alt="Shoes" />
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
          <img src="/shoe.jpg" alt="Shoes" />
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
          <img src="/shoe.jpg" alt="Shoes" />
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
          <img src="/shoe.jpg" alt="Shoes" />
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
  );
};

export default Section1;
