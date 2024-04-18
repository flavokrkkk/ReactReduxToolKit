import { Card, CardBody, CardTitle, Container } from "react-bootstrap";
import { IUser } from "../models";

interface UserItemProps {
  users: IUser[];
}

const UserItem = ({ users }: UserItemProps) => {
  return (
    <Container>
      {users.map((user) => (
        <Card key={user.id} className="mb-3 text-center p-3">
          <CardTitle>
            {user.id} - {user.name}
          </CardTitle>
          <CardBody>{user.email}</CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default UserItem;
