import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { Card, CardBody, CardTitle, Container } from "react-bootstrap";

const App = () => {
  const { error, loading, users } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <h2 className="text-center">Loading...</h2>;

  if (error) return <h2 className="text-center">{error}</h2>;

  return (
    <Container>
      <h1 className=" text-center mb-3">Users</h1>
      <hr />
      {users.map((user) => (
        <Card className="mb-3 text-center">
          <CardTitle>
            {user.id} - {user.name}
          </CardTitle>
          <CardBody>{user.email}</CardBody>
        </Card>
      ))}
    </Container>
  );
};

export default App;
