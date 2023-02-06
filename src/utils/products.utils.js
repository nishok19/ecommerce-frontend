import axios from "axios";

const baseUrl = "http://localhost:4000";

export const addProducts = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/api/products`,
      data: data,
      //   {
      //     files,
      //     name,
      //     price,
      //     description,
      //     collectionId,
      //   },
    });

    if (!res) throw new Error("Error in 'Add Prodcts'");
    return { success: true, user: res.data };
  } catch (err) {
    console.log("Error in add product", err);
    return { success: false, err };
  }
};
