import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextDataProps } from "../contexts/AuthContext/interfaces";

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context;
}