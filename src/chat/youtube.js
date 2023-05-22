import axios from "axios";
export const searchVideos = async (query) => {
  const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      maxResults: 10, // Adjust the number of results as needed
      q: query,
      key: import.meta.env.VITE_YOUTUBE,
    },
  });
  return response.data.items;
};
