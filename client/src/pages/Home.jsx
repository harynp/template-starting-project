import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>HOMEPAGE</h1>
      <p>
        Go To <Link to="products">The list of products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
