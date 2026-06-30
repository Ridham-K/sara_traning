// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const user = localStorage.getItem("user");

//   if (!user) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("User =", user);

  if (!user) {
    console.log("Redirecting to Login...");
    return <Navigate to="/" replace />;
  }

  console.log("Opening Dashboard...");
  return children;
}

export default ProtectedRoute;