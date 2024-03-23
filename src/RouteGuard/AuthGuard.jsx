import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthGraud = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div>{token && <Outlet />}</div>;
    </>
  );
};

export default AuthGraud;
