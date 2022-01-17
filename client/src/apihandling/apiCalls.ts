import { User } from "../models/User";
import { Product } from "../models/Product";
import { Content } from "../models/Content";
import { publicRequest, userRequest } from "../requestMethods";

//Userrequests
export const login = async (user: User) => {
  try {
    console.log(user);
    const res = await publicRequest.post("api/auth/login", user);
    console.log("Login Result: ", res);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("accessToken", res.data.accessToken);
    window.location.reload();
    return true;
  } catch (err) {
    console.log("Login Failed!", err);
    return false;
  }
};

export const logout = async () => {
  try {
    localStorage.setItem("isAuthenticated", "false");
  } catch (err) {
    console.log("Logout failed", err);
  }
};

//Productrequests

export const getProducts = async () => {
  try {
    const res = await publicRequest.get("api/products");
    return res.data as Product[];
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await userRequest.delete(`api/products/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (id: string, product: Product) => {
  try {
    // update
    const res = await userRequest.put(`api/products/${id}`);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (product: Product) => {
  try {
    const res = await userRequest.post(`api/products`, product);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

//Contentrequests
export const getContent = async () => {
  try {
    const res = await publicRequest.get("api/contents");
    return res;
  } catch (err) {
    return null;
  }
};

export const addContent = async (content: Content) => {
  try {
    const res = await userRequest.post(`api/contents`, content);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const updateContent = async (id: string, content: Content) => {
  try {
    const res = await userRequest.put(`api/contents/${id}`, content);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
