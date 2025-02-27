import React from 'react';
import axios from "axios";

 // Import du fichier CSS

const DataList = ( ) => {
    const [posts, setPosts] = React.useState([]);

    const [count, setCount] = React.useState(0)
  
    const API_URL = "http://localhost:3000/posts"; // Adjust URL

    React.useEffect(() => {
      axios.get(API_URL)
        .then(response => setPosts(response.data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
    const handleAddPost = async () => {
      try {
        const response = await axios.post(API_URL, { title: "New Post", content: "This is content." });
        console.log("Post added:", response.data);
      } catch (error) {
        console.error("Error adding post:", error);
      }
    };
    console.log(posts)

    console.log("posts ==== >"+posts)
  return (
    <div className="data-list">
      {posts.map((item) => (
        <div key={item._id} className="data-item">
          <img src={item.image_url} alt={item.content} className="data-image" />
          <div className="data-content">
            <p>{item.content}</p>
            <small>{new Date(item.createdAt).toLocaleDateString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;