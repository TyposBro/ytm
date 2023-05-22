import React, { useState } from "react";
import { searchVideos } from "./youtube";
import ReactPlayer from "react-player";

function App() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const searchResults = await searchVideos(query);
    setVideos(searchResults);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
            <p>{video.snippet.title}</p>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
            {/* Add play functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
