import { useSelector } from "react-redux";
import ProductCard from "../Products/ProductCard.component";

const SearchProducts = () => {
  const products = useSelector((state) => state.products.searchedProducts);
  return (
    <>
      {products?.map((product) => (
        <ProductCard item={product} />
      ))}
    </>
  );
};
export default SearchProducts;
