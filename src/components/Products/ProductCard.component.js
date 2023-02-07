const ProductCard = ({ item }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-6 mx-12 ">
      <figure className=" w-[400px] h-[150px]">
        <img
          className="object-contain object-topblock w-full h-full overflow-hidden"
          src={item?.photos[0]?.secure_url}
          alt="Shoes"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
