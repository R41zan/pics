import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f3b09ed0392684590e118e69d404d9f059333d5b5f60f51672f90c792e3b4f3e"
  }
});
