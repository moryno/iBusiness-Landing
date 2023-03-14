export const logoutFunc = () => {
  localStorage.removeItem("token");
};

export const setupLogin = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
};
