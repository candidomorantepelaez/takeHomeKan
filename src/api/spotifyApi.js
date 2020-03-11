import axios from "axios";
import { getAuthorization } from "@/sideEffects/sessionData";

export const getSearch = ({ textSearch, limit }) =>
  axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: getAuthorization()
    },
    params: {
      q: textSearch,
      type: "album,artist,playlist,track",
      limit: limit
    }
  });
