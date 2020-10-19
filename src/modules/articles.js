import axios from "axios";

const Articles = {
  async create(title, lead, content, image, category) {
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      let result = await axios.post(
        "/admin/articles",
        {
          article: {
            title: title,
            lead: lead,
            content: content,
            image: image,
            category: category,
          },
        },
        {
          headers: {
            ...headers,
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      document.getElementById("create-article").reset();

      return result.data.message;
    } catch (error) {
      return error.response.data.message;
    }
  },
};
export default Articles;
