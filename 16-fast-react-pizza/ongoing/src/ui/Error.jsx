import { useNavigate, useRouteError } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>Something when wrong 😢</h1>
      <p>{error.message || error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}