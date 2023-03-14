import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { setupLogin } from "../helpers/auth.js";
import { logoutFunc } from "../helpers/auth.js";
import axios from "axios";
import { homeWebsite } from "../helpers/requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(
      "https://bookingapptrial.azurewebsites.net/login",
      user,
      {
        withCredentials: true,
      }
    );

    setupLogin(data?.token, data?.user);
    dispatch(loginSuccess(data));
    window.location.href = homeWebsite;
  } catch (error) {
    dispatch(loginFailure());
    logoutFunc();
  }
};
