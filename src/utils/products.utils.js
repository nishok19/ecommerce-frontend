import axios from "axios";

const baseUrl = "http://localhost:4000";

export const getProducts = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseUrl}/api/products`,
      withCredentials: true,
    });

    if (!res) throw new Error("Error in 'Get Products'");
    console.log(res.data);
    return {
      success: true,
      products: res.data.products,
      user: res.data.user,
      statusCode: res.status,
    };
  } catch (err) {
    console.log("Error in getting product", err);
    return { success: false, statusCode: err?.response?.status, err };
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
    return { success: true, products: res.data };
  } catch (err) {
    console.log("Error in add product", err);
    return { success: false, err };
  }
};
