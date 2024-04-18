import { Button, Card, CardBody, CardTitle, Container } from "react-bootstrap";
import { IPost } from "../models";

interface PostsItemProps {
  posts: IPost[];
}

const PostItem = ({ posts }: PostsItemProps) => {
  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <Card key={post.id} className="mb-3 p-3">
            <CardTitle>
              {post.id} - {post.title}
            </CardTitle>
            <CardBody>{post.body}</CardBody>
            <Button variant="outline-dark">Delete</Button>
          </Card>
        ))}
    </Container>
  );
};

export default PostItem;
