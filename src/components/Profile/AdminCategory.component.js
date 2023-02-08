import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToastStore } from "src/slices/toastSlice";
import { addNewCollection } from "src/utils/collection";

const Category = () => {
  const [collectionName, setCollectionName] = useState("");

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

  return (
    <div className="mt-7">
      <h3 className="text-3xl">Manage Category</h3>
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
    </div>
  );
};
export default Category;
