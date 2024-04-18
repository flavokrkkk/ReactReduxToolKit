import { Button, Container } from "react-bootstrap";
import PostItem from "../Components/PostItem";
import { postAPI } from "../services/PostService";
import Loader from "../Components/UI/Loader";
import Error from "../Components/UI/Error";
import { useEffect, useState } from "react";
import { IPost } from "../models";

const PostsPage = () => {
  const [limit, setLimit] = useState<number>(100);
  //Использование хука RTKquery
  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postAPI.useCreatePostsMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostsMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);

  const handlerCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  if (isLoading) return <Loader />;

  if (error) return <Error error={`${error}`} />;

  return (
    <Container className="mt-4">
      <h1 className=" text-center mb-3">Posts</h1>
      <Button onClick={handlerCreate}>Add new Posts</Button>
      <hr />
      <PostItem remove={handleRemove} update={handleUpdate} posts={posts!} />
    </Container>
  );
};

export default PostsPage;
