import { useCallback } from "react";
import { useStytchB2BClient } from "@stytch/react/b2b";

export const LogOutButton = () => {
  const stytch = useStytchB2BClient();

  const logout = useCallback(() => {
    stytch.session.revoke();
  }, [stytch]);

  return <button onClick={logout}>Log out</button>;
};
