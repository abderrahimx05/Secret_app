import * as api from "../api";
export const signin = (formData, history) => async (dispach) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispach) => {
  try {
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
