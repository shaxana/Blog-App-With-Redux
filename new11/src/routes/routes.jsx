import UserRoot from "../pages/UserRoot";
import Blogs from "../pages/Blogs";
import PostBlog from "../pages/PostBlog";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Blogs />,
      },
      {
        path: "/postblog",
        element: <PostBlog />,
      },
    ],
  }
  
];

export default routes;