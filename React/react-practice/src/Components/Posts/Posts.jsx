import "./Posts.css";

function Posts({ posts, getPosts, addPost, deletePost }) {
  return (
    <>
      <h1>Posts Data</h1>

      <div className="btn-container">
        <button className="fetch-btn" onClick={getPosts}>
          Fetch Data
        </button>

        <button className="add-btn" onClick={addPost}>
          Add Post
        </button>

        <button className="delete-btn" onClick={deletePost}>
          Delete Last Post
        </button>
      </div>

      <h3>Total Posts: {posts.length}</h3>

      <table border="1" cellPadding="10" color="black">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Posts;