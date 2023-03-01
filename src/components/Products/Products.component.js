import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProductsStore } from "src/slices/productSlice";
import ProductCard from "./ProductCard.component";

const Products = ({ categoryId }) => {
  const [sort, setSort] = useState("");
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortProductsStore(sort));
  }, [sort]);

  return (
    <div className="flex flex-wrap flex-col mx-auto">
      <div className="flex item-center justify-end my-4">
        <p className="text-center my-auto">Sort: </p>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => {
            setSort(e.target.value);
          }}
          value={sort}
        >
          <option disabled selected>
            Sort
          </option>
          <option value="asc">Sort By Price: Low to High</option>
          <option value="desc">Sort By Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-wrap mx-auto">
        {!categoryId
          ? products.map((prod) => <ProductCard item={prod} key={prod?._id} />)
          : products.map((prod) => {
              return prod?.collectionId == categoryId ? (
                <ProductCard item={prod} key={prod?._id} />
              ) : null;
            })}
      </div>
    </div>
  );
};

export default Products;
