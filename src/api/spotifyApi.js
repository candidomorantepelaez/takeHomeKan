import axios from "axios";
import { getAuthorization } from "@/sideEffects/sessionData";

export const getSearch = searchText =>
  axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: getAuthorization()
    },
    params: {
      q: searchText,
      type: "album,artist,playlist,track"
    }
  });
