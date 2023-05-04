import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import { addNewCollection } from "src/utils/collection.utils";
import ConfirmModal from "../ConfirmModal.component";

const Category = () => {
  const [collectionName, setCollectionName] = useState("");
  const [delCollectionName, setDelCollectionName] = useState("");
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

  const deleteCollection = async (isConfirm) => {
    if (isConfirm) console.log("wwwoooooo");
    else console.log("weeeeeeeeeeeee");
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
            className="input input-bordered focus:outline-none"
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
              value={delCollectionName}
              onChange={(e) => setDelCollectionName(e.target.value)}
            >
              <option disabled selected>
                Pick category
              </option>
              {categoryStore.map((cat) => (
                <option key={cat?._id}>{cat?.name}</option>
              ))}
            </select>
            <label className="">
              <ConfirmModal
                btnTitle={"Delete"}
                title={"Confirm"}
                description={"Are you sure you want to delete this category"}
                isConfirmDialog={deleteCollection}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
