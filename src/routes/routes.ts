import PostsPage from "../Pages/PostsPage";
import UserPage from "../Pages/UserPage";

export const publicRoute = [
  {
    path: "/users",
    Component: UserPage,
  },

  {
    path: "/posts",
    Component: PostsPage,
  },
];
