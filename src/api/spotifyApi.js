import axios from "axios";

export const getSearch = () =>
  axios
    .get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `${localStorage.getItem("tt")} ${localStorage.getItem(
          "at"
        )}`
      },
      params: {
        q: "nirvana",
        type: "album,artist,playlist,track"
      }
    })
    .then(console.log)
    .catch(console.error);
