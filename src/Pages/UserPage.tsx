import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/reducers/ActionCreators";
import UserItem from "../Components/UserItem";
import { Container } from "react-bootstrap";
import Loader from "../Components/UI/Loader";
import Error from "../Components/UI/Error";

const UserPage = () => {
  const { error, loading, users } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error error={error} />;

  return (
    <Container className="mt-4">
      <h1 className=" text-center mb-3">Users</h1>
      <hr />
      <UserItem users={users} />
    </Container>
  );
};

export default UserPage;
