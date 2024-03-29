import axios from "axios";

const baseUrl = "http://localhost:4000";

export const getAllCollections = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseUrl}/api/collection`,
      withCredentials: true,
    });
    if (!res) throw new Error("Error in 'Getting Collections'");
    return { success: true, collections: res.data.collections };
  } catch (err) {
    console.log("Error in getting collection", err);
    return { success: false, err };
  }
};

export const addNewCollection = async (name) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/api/collection`,
      data: {
        name,
      },
    });

    if (!res) throw new Error("Error in 'Add Collection'");
    return { success: true, user: res.data };
  } catch (err) {
    console.log("Error in add collection", err);
    return { success: false, err };
  }
};

export const deleteCollection = async (id) => {
  try {
    const res = await axios({
      method: "delete",
      url: `${baseUrl}/api/collection/${id}`,
    });

    if (!res) throw new Error("Error in 'Deleting Collection'");
    return { success: true, user: res.data };
  } catch (err) {
    console.log("Error in delete collection", err);
    return { success: false, err };
  }
};
