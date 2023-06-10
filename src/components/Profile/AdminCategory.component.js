import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import { addNewCollection, deleteCollection } from "src/utils/collection.utils";
import ConfirmModal from "../ConfirmModal.component";

const Category = () => {
  const [collectionName, setCollectionName] = useState("");
  const [delCollectionId, setDelCollectionId] = useState("");
  const categoryStore = useSelector((state) => state.category.category);

  const dispatch = useDispatch();

  const addCollection = async (e) => {
    e.preventDefault();

    if (collectionName == "") {
      dispatch(
        addToastStore({ msg: "Enter the category name", type: "warning" })
      );
      return null;
    }

    const res = await addNewCollection(collectionName);

    if (!res.success) {
      console.log("Error adding the category");
      dispatch(
        addToastStore({ msg: "Error in adding the category", type: "error" })
      );
      return null;
    }

    dispatch(
      addToastStore({ msg: "Successfully added the category", type: "success" })
    );
    setCollectionName("");
    console.log("Success...created the category");
  };

  const delCollection = async (isConfirm) => {
    if (!isConfirm) return;
    const res = deleteCollection(delCollectionId);
    if (!res.success) {
      dispatch(
        addToastStore({
          msg: "Error deleting a category/collection",
          type: "error",
        })
      );
    }

    dispatch(
      addToastStore({
        msg: "Deleted the category/collection",
        type: "success",
      })
    );
  };

  return (
    <div className="mt-7">
      <h3 className="text-3xl font-semibold">Manage Category</h3>
      <div className="form-control">
        <label className="label mt-4">
          <span className="label-text text-xl">Add new category</span>
        </label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Category"
            className="input input-bordered focus:outline-none bg-white"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
          <button onClick={addCollection} className="btn">
            Add
          </button>
        </div>
      </div>
      {/*  */}
      <div className="mt-10">
        <div className="text-3xl font-normal">Delete a Category of Product</div>
        <div className="form-control">
          <div className="input-group">
            <select
              className="select select-bordered"
              onChange={(e) =>
                setDelCollectionId(e.target.selectedOptions[0].ariaLabel)
              }
            >
              <option disabled selected>
                Pick a category
              </option>
              {categoryStore.map((cat) => (
                <option key={cat?._id} aria-label={cat._id}>
                  {cat?.name}
                </option>
              ))}
            </select>
            <label className="btn">
              <ConfirmModal
                btnTitle={"Delete"}
                title={"Confirm"}
                description={"Are you sure you want to delete this category"}
                isConfirmDialog={delCollection}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
