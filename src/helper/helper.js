// import { useDispatch } from "react-redux";
// import { addCategoryStore } from "src/slices/categorySlice";
// import { addProductsStore } from "src/slices/productSlice";
// import { addToastStore } from "src/slices/toastSlice";
// import { getAllCollections } from "src/utils/collection.utils";
// import { getProducts } from "src/utils/products.utils";

export const initializePayment = async ({ order }, razorypay_key, user) => {
  let options = {
    key: razorypay_key,
    amount: order.amount,
    currency: "INR",
    name: "Carter",
    description: "Product Purchase",
    order_id: order.id,
    // image: "https://example.com/your_logo",
    prefill: {
      name: user.username,
      email: user.email,
      contact: "9000090000",
    },
    handler: function (res) {
      handleResp(res);
    },
  };

  let rzp = await new Razorpay(options);
  rzp.open();
};
