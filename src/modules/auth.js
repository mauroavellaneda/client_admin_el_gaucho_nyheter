import JtockAuth from "j-tockauth";

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://";
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
    debugger;
    dispatch({
      type: "AUTHENTICATE",
      payload: {
        currentUser: { email: response.data.email, role: response.data.role },
        authenticate: true,
      },
    });
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
