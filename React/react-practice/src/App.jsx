// // import "./App.css";

// // import Greetings from "./Components/Greetings/Greetings.jsx";
// // import Login from "./Components/Login/Login.jsx";
// // import ScoreCard from "./Components/ScoreCard/ScoreCard.jsx";
// // import Avatar from "./Components/Avatar/Avatar.jsx";
// // import Navbar from "./Components/NavBar/NavBar.jsx";
// // import Page from "./Components/utils.jsx";
// // import UserCard from "./Components/UserCard/UserCard.jsx";
// // import PriceTag from "./Components/PriceTag/PriceTag.jsx";
// // import Card from "./Components/Card/Card.jsx";
// // import PageLayout from "./Components/PageLayout/PageLayout.jsx";

// // function App() {
// //   return (
// //     <PageLayout title="React Exercises">

// //       <div className="container">

// //         <div className="card">
// //           <h2>Exercise 1 - Greeting</h2>
// //           <Greetings />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 2 - Login Form</h2>
// //           <Login />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 3 - Score Card</h2>
// //           <ScoreCard />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 4 - Avatar</h2>
// //           <Avatar />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 5 - Navbar</h2>
// //           <Navbar />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 6 - Exports</h2>
// //           <Page />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 7 - Props</h2>

// //           <UserCard
// //             name="Alice"
// //             role="Developer"
// //           />

// //           <UserCard
// //             name="Bob"
// //             role="Designer"
// //           />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 8 - Destructured Props & Default Values</h2>

// //           <UserCard
// //             name="Alice"
// //             role="Developer"
// //             isActive={true}
// //           />

// //           <UserCard
// //             name="Bob"
// //           />

// //           <UserCard
// //             name="Charlie"
// //             role="Designer"
// //           />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 9 - Props Are Immutable</h2>

// //           <PriceTag
// //             price={1000}
// //             currency="INR"
// //             discount={200}
// //           />

// //           <PriceTag
// //             price={599.99}
// //             currency="USD"
// //           />

// //           <PriceTag
// //             price={1499}
// //             currency="INR"
// //             discount={99}
// //           />
// //         </div>

// //         <div className="card">
// //           <h2>Exercise 10 - Children Prop</h2>

// //           <Card>
// //             <p>Hello inside a card!</p>
// //           </Card>

// //           <Card>
// //             <h3>Welcome Sara</h3>
// //             <p>This content is passed using children.</p>
// //           </Card>

// //           <Card>
// //             <button>Click Me</button>
// //           </Card>
// //         </div>

// //       </div>

// //     </PageLayout>
// //   );
// // }

// // export default App;



// import { useState } from "react";

// function App() {
//   const [posts, setPosts] = useState([]);

//   const getPosts = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );

//     const data = await response.json();
//     setPosts(data);
//   };

//   const addPost = () => {
//     const newPost = {
//       userId: 11,
//       id: posts.length + 1,
//       title: "My New Post",
//       body: "This post was added manually"
//     };

//     setPosts([...posts, newPost]);
//   };

//   const deletepost = () => {
//     setPosts(
//       posts.filter((post) => post.id != 1)
//     );
//   };

//   return (
//     <>
//       <h1>Posts Data</h1>

//       <button onClick={getPosts}>
//         Show Data
//       </button>

//       <button onClick={addPost}>
//         Add Post
//       </button>

//       <button onClick={deletepost}>
//         Delete Post
//       </button>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>

//         <tbody>
//           {posts.map((post) => (
//             <tr key={post.id}>
//               <td>{post.userId}</td>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default App;


// {/* {posts.filter((post) => post.title.startsWith("dolorem"))
//           .map((post) => (
//             <tr key={post.id}>
//               <td>{post.userId}</td>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))} */}
       

import { useState } from "react";
import Posts from "./components/Posts/Posts.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  
  const getPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();
    setPosts(data);
  };

  
  const addPost = async () => {
    const nextId = posts.length + 1;

    
    if (nextId > 100) {
      alert("No more posts available!");
      return;
    }

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${nextId}`
    );

    const data = await response.json();

    setPosts((prev) => [...prev, data]);
  };

  
  const deletePost = () => {
    setPosts((prev) => prev.slice(0, -1));
  };

  return (
    <Posts
      posts={posts}
      getPosts={getPosts}
      addPost={addPost}
      deletePost={deletePost}
    />
  );
}

export default App;