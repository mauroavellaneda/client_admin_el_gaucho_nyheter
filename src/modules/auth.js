import JtockAuth from "j-tockauth";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://api-el-gaucho-nyheter.herokuapp.com";
} else {
  apiUrl = "http://localhost:3000";
}

const auth = new JtockAuth({
  host: apiUrl,
  prefixUrl: "/api/v1",
});

const login = async (event, dispatch) => {
  event.preventDefault();
  try {
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await auth.signIn(email, password);
    if (response.data.role === "journalist") {
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email, role: response.data.role },
          authenticate: true,
        },
      });
    } else {
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          message: "You're not authorized to access this page",
        },
      });
    }
  } catch (error) {
    dispatch({
      type: "AUTHENTICATE",
      payload: {
        message: error.response.data.errors[0],
      },
    });
  }
};

export { login };
