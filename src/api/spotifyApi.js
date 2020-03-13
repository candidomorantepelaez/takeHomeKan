import axios from "axios";
import { getAuthorization } from "@/sideEffects/sessionData";

export const getSearch = ({
  q = "all",
  limit = "3",
  type = "album,artist,playlist,track"
}) =>
  axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: getAuthorization()
    },
    params: {
      q: q,
      type: type,
      limit: limit
    }
  });
