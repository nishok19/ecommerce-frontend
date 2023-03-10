import axios from "axios";

const baseUrl = "http://localhost:4000";

export const signup = async ({ username, email, password }) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/api/auth/signup`,
      data: {
        username,
        email,
        password,
      },
    });

    if (!res) throw new Error("Error in 'Signup-auth'");
    return { success: true, user: res.data };
  } catch (err) {
    console.log("Error in signup", err);
    return { success: false, err };
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await axios({
      method: "post",
      url: `${baseUrl}/api/auth/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    });
    if (!res) throw new Error("Error in 'Login-auth'");
    return { success: true, user: res.data.user, jwt: res.data.token };
  } catch (err) {
    console.log("Error in login", err);
    return { success: false, err };
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${baseUrl}/api/auth/logout`,
      withCredentials: true,
    });

    if (!res) throw new Error("Error in 'Logout-auth'");
    return { success: true };
  } catch (err) {
    console.log("Error in login", err);
    return { success: false, err };
  }
};
