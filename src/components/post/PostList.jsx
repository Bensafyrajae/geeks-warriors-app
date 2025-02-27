import { useEffect, useState } from "react";
import { getPosts, likePost, getComments, addComment } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await likePost(postId);
      fetchPosts(); // Refresh posts after like
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      await addComment(postId, { content: comment });
      fetchPosts(); // Refresh posts to show new comments
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <p>{post.content}</p>
          <button onClick={() => handleLike(post._id)}>
            Like ({post.likes.length})
          </button>

          {/* Display Comments */}
          <div>
            {post.comments.map((comment) => (
              <p key={comment._id}>{comment.content}</p>
            ))}
          </div>

          {/* Add Comment */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleComment(post._id, e.target.comment.value);
              e.target.comment.value = "";
            }}
          >
            <input type="text" name="comment" placeholder="Add a comment..." />
            <button type="submit">Comment</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default PostList;
