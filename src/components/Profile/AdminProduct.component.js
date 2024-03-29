import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import { addProducts } from "src/utils/products.utils";
import ConfirmModal from "../ConfirmModal.component";

const Product = () => {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodFile, setProdFile] = useState(null);
  const [prodCategory, setProdCategory] = useState(
    "Select the product category"
  );
  const [delProduct, setDelProduct] = useState("");

  const categories = useSelector((state) => state.category.category);
  const productsStore = useSelector((state) => state.products.products);
  const fileEleRef = useRef();

  const dispatch = useDispatch();

  const formData = new FormData();

  const submitProduct = async (e) => {
    e.preventDefault();

    if (!prodName || !prodPrice || !prodDesc || !prodFile || !prodCategory) {
      dispatch(addToastStore({ msg: "Fill all the details", type: "warning" }));
      return null;
    }

    formData.append("files", prodFile);
    formData.set("name", prodName);
    formData.set("price", prodPrice);
    formData.set("description", prodDesc);
    formData.set("collectionId", prodCategory);

    const res = await addProducts(formData);

    if (!res.success) {
      dispatch(
        addToastStore({ msg: "Error in adding the product", type: "error" })
      );
      return null;
    }

    setProdName("");
    setProdPrice("");
    setProdDesc("");
    // setProdFile(null);
    fileEleRef.current.value = "";
    setProdCategory("");

    dispatch(
      addToastStore({ msg: "Successfully added the product", type: "success" })
    );
    console.log("successs ressss......", res);
  };

  const delProd = async (isConifrm) => {
    console.log("dsf", isConifrm);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center ml-[60px] mt-[30px]">
        {/* form */}
        <form onSubmit={submitProduct} className="flex flex-col space-y-6">
          <h3 className="text-4xl">Create a New Product</h3>
          {/* image */}
          <input
            type="file"
            name="files"
            ref={fileEleRef}
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
            // value={prodCategory}
            onChange={(e) =>
              setProdCategory(e.target.selectedOptions[0].ariaLabel)
            }
          >
            <option disabled selected>
              Select the product category
            </option>
            {categories?.map((catg) => (
              <option key={catg?._id} aria-label={catg?._id}>
                {catg?.name}
              </option>
            ))}
          </select>

          {/* submit button */}
          <button type="submit" className="btn btn-outline">
            Submit
          </button>
        </form>
      </div>

      {/* Delete a product */}

      <div className="flex flex-col justify-center ml-[60px] mt-[50px] ">
        <h2 className="text-4xl">Delete Product</h2>
        <div>
          <select
            className="select select-bordered w-full max-w-xs mt-[30px]"
            onChange={(e) =>
              setDelProduct(e.target.selectedOptions[0].ariaLabel)
            }
          >
            <option disabled selected>
              Pick a product
            </option>
            {productsStore.map((prod) => (
              <option key={prod?._id} aria-label={prod._id}>
                {prod.name} - {prod._id}
              </option>
            ))}
          </select>
          {/* <button className="btn btn-error ml-8" onClick={deleteProduct}>
            Delete
          </button> */}
          <ConfirmModal
            btnTitle={"Delete"}
            title={"Confirm"}
            description={"Are you sure you want to delete this product"}
            isConfirmDialog={delProd}
          />
        </div>
      </div>
    </div>
  );
};
export default Product;
