import { useSelector } from "react-redux";
import ProductCard from "./ProductCard.component";

const Products = ({ categoryId }) => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="flex flex-wrap mx-auto ">
      {!categoryId
        ? products.map((prod) => <ProductCard item={prod} key={prod?._id} />)
        : products.map((prod) => {
            return prod?.collectionId == categoryId ? (
              <ProductCard item={prod} key={prod?._id} />
            ) : null;
          })}
    </div>
  );
};

export default Products;
