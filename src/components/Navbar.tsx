import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useStytchMemberSession } from "@stytch/react/b2b";

import { LogOutButton } from "./LogoutButton";

export default function Navbar() {
  const { session } = useStytchMemberSession();
  return (
    <nav className="flex items-center gap-4 text-purple-500">
      <Link to="">Home</Link>
      {session ? (
        <Fragment>
          <Link to="dashboard">Dashboard</Link>
          <LogOutButton />
        </Fragment>
      ) : (
        <Link to="authenticate">Login</Link>
      )}
    </nav>
  );
}
