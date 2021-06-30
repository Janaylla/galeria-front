import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../router/coordinator";

export const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};
