import { useStytchMemberSession } from "@stytch/react/b2b";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  const { session, fromCache } = useStytchMemberSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) navigate("/authenticate");
  }, [session, fromCache, navigate]);

  return session ? <Outlet /> : <Navigate to={"/authenticate"} />;
}
