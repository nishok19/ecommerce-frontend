import axios from "axios";

const baseUrl = "http://localhost:4000";

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
