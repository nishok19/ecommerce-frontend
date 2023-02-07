import { useState } from "react";
import { addProducts } from "src/utils/products.utils";

const Product = () => {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodFile, setProdFile] = useState(null);
  const [prodCategory, setProdCategory] = useState(
    "Select the product category"
  );

  const formData = new FormData();

  const submitProduct = async (e) => {
    e.preventDefault();

    if (
      prodName == "" ||
      prodPrice == "" ||
      prodDesc == "" ||
      !prodFile ||
      prodCategory == ""
    ) {
      console.log("wooo", prodFile);
      return null;
    }

    formData.append("files", prodFile);
    formData.set("name", prodName);
    formData.set("price", prodPrice);
    formData.set("description", prodDesc);
    formData.set("collectionId", prodCategory);

    console.log("dataaaaaa......", formData);
    const res = await addProducts(formData);

    if (!res.success) {
      return null;
    }

    setProdName("");
    setProdPrice("");
    setProdDesc("");
    setProdFile(null);
    setProdCategory("");
    console.log("successs ressss......", res);
  };

  return (
    <div className="flex items-center justify-center ml-[60px] mt-[30px]">
      {/* form */}
      <form onSubmit={submitProduct} className="flex flex-col space-y-6">
        <h3 className="text-4xl">Create a New Product</h3>
        {/* image */}
        <input
          type="file"
          name="files"
          className="file-input w-full max-w-xs"
          onChange={(e) => setProdFile(e.target.files[0])}
        />
        {/* name */}
        <input
          type="text"
          name="name"
          placeholder="Product name"
          className="input w-full max-w-xs"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
        />
        {/* price */}
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input w-full max-w-xs"
          value={prodPrice}
          onChange={(e) => setProdPrice(e.target.value)}
        />
        {/* description */}
        <textarea
          className="textarea"
          name="description"
          placeholder="Product description"
          value={prodDesc}
          onChange={(e) => setProdDesc(e.target.value)}
        ></textarea>
        {/* category id */}
        <select
          className="select w-full max-w-xs"
          name="category"
          value={prodCategory}
          onChange={(e) => setProdCategory(e.target.value)}
        >
          <option disabled selected>
            Select the product category
          </option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Home Appliances</option>
          <option>Furnitures</option>
        </select>

        {/* submit button */}
        <button type="submit" className="btn btn-outline">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Product;
