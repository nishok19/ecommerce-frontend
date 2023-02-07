import axios from "axios";

const baseUrl = "http://localhost:4000";

export const getProducts = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseUrl}/api/products`,
    });

    if (!res) throw new Error("Error in 'Get Products'");

    return { success: true, products: res.data };
  } catch (err) {
    console.log("Error in getting product", err);
    return { success: false, err };
  }
};

export const addProducts = async (data) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/api/products`,
      data: data,
    });

    if (!res) throw new Error("Error in 'Add Products'");
    return { success: true, user: res.data };
  } catch (err) {
    console.log("Error in add product", err);
    return { success: false, err };
  }
};
