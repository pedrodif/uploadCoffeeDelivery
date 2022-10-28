// Hooks
import { useNavigate  } from "react-router-dom";

export function handleClick(path: string) {
  const navigate = useNavigate();
  navigate(path);
}