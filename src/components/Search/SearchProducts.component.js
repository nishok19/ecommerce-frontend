import { useSelector } from "react-redux";
import SearchProductCard from "./SearchProductCard.component";

const SearchProducts = () => {
  const products = useSelector((state) => state.products.searchedProducts);

  if (products?.length == 0) return <div>No Search results found</div>;

  return (
    <>
      <div className="flex flex-wrap mx-auto ">
        {products?.map((product) => (
          <SearchProductCard item={product} />
        ))}
      </div>
    </>
  );
};
export default SearchProducts;
