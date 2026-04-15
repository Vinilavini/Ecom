import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="back-circle" onClick={() => navigate(-1)}>
      ←
    </div>
  );
};

export default BackButton;