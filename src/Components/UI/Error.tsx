import { Container } from "react-bootstrap";

interface ErrorProps {
  error: string;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center">{error}</h2>
    </Container>
  );
};

export default Error;
