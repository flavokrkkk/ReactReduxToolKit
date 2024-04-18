import { Button, Card, CardBody, CardTitle, Container } from "react-bootstrap";
import { IPost } from "../models";
import React from "react";

interface PostsItemProps {
  posts: IPost[];
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem = ({ posts, remove, update }: PostsItemProps) => {
  return (
    <Container>
      {posts &&
        posts.map((post) => (
          <Card
            key={post.id}
            className="mb-3 p-3"
            onClick={() => {
              const title = prompt() || "";
              update({ ...post, title });
            }}
          >
            <CardTitle>
              {post.id} - {post.title}
            </CardTitle>
            <CardBody>{post.body}</CardBody>
            <Button
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                remove(post);
              }}
              variant="outline-dark"
            >
              Delete
            </Button>
          </Card>
        ))}
    </Container>
  );
};

export default PostItem;
