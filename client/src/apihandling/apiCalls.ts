import { User } from "../models/User";
import { publicRequest } from "../requestMethods";

export const login = async (user: User) => {
  try {
    console.log(user);
    const res = await publicRequest.post("api/auth/login", user);
    console.log("Login Result: ", res);
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "http://localhost:3000/admin";
  } catch (err) {
    console.log("Login Failed!", err);
  }
};

export const logout = async () => {
  try {
    localStorage.setItem("isAuthenticated", "false");
  } catch (err) {
    console.log("Logout failed", err);
  }
};
