import { Container } from "react-bootstrap";
import PostItem from "../Components/PostItem";
import { postAPI } from "../services/PostService";
import Loader from "../Components/UI/Loader";
import Error from "../Components/UI/Error";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [limit, setLimit] = useState<number>(10);

  //Использование хука RTKquery
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <Error error={`${error}`} />;

  return (
    <Container className="mt-4">
      <h1 className=" text-center mb-3">Posts</h1>
      <hr />
      <PostItem posts={posts!} />
    </Container>
  );
};

export default PostsPage;
