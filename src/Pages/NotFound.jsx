import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go To Start</button>
    </div>
  );
};

export default NotFound;
