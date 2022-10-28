// Hooks
import { useNavigate  } from "react-router-dom";

// Constant
const navigate = useNavigate();

export function handleClick(path: string) {
  navigate(path);
}